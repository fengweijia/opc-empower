/**
 * OPC赚钱军师 - Serverless API处理器
 * 处理微信小程序的所有API请求
 */

const { AgentManager } = require('./src/agents/AgentManager')
const { AIService } = require('./src/services/AIService')
const { LarkService } = require('./src/services/LarkService')

// 创建全局实例（复用）
const agentManager = new AgentManager()
const aiService = new AIService()

// 响应处理
function responseSuccess(data, msg = 'success') {
  return {
    success: true,
    message: msg,
    data,
    timestamp: Date.now()
  }
}

function responseError(error, code = 500) {
  return {
    success: false,
    message: error.message || '服务器错误',
    code,
    timestamp: Date.now()
  }
}

// API处理函数 (Serverless 云函数入口)
const mainHandler = async (event, context) => {
  const { action, params } = event
  
  try {
    switch (action) {
      // 获取可用Agent列表
      case 'getAgents': {
        const agents = agentManager.getAvailableAgents()
        return responseSuccess(agents)
      }

      // 执行Agent请求
      case 'executeAgent': {
        const { agentType, skillType, config, userParams } = params
        
        // 验证参数
        if (!agentType || !skillType) {
          throw new Error('缺少必要参数: agentType, skillType')
        }

        const aiConfig =
          (config && config.aiConfig) ||
          (config && config.apiKey
            ? {
                provider: config.provider,
                apiKey: config.apiKey,
                apiEndpoint: config.apiEndpoint,
                model: config.model
              }
            : null)

        if (!aiConfig || !aiConfig.apiKey) {
          throw new Error('缺少AI配置，请先在设置中配置API Key')
        }

        // 1. 获取动态配置（知识底座与Prompt版本），并将其合并到参数中
        const larkConfig = (config && config.larkConfig) || null
        let promptVersion = 'default'
        
        if (larkConfig && larkConfig.appId) {
          try {
            const larkService = new LarkService(larkConfig)
            // 尝试获取最新的 prompt_version
            const promptConfig = await larkService.getConfigRecord('prompt_version', skillType)
            if (promptConfig && promptConfig.fields) {
               const content = promptConfig.fields['生成内容']
               if (content) {
                  try {
                    const parsed = JSON.parse(content)
                    if (parsed.version) {
                       promptVersion = parsed.version
                       // 也可以在这里将远程拉取的 prompt template 注入给 userParams 供 AgentManager 使用
                       // userParams.remotePromptTemplate = parsed.template
                    }
                  } catch(e) {
                    console.warn('解析飞书配置的Prompt版本失败', e)
                  }
               }
            }
          } catch (err) {
             console.warn('获取飞书动态配置失败，降级使用本地默认配置', err)
          }
        }

        // 2. 调用AI服务生成内容
        const aiResult = await agentManager.processRequest(
          agentType, 
          skillType, 
          {
            ...(userParams || {}),
            aiConfig,
            promptVersion
          },
          aiService
        )

        // 3. 如果用户配置了飞书，保存到用户的多维表格
        if (larkConfig && larkConfig.appId) {
          try {
            const larkService = new LarkService(larkConfig)
            await larkService.saveGenerationRecord({
              userId: userParams.userId || 'anonymous',
              agentType,
              skillType,
              inputParams: userParams,
              outputContent: aiResult,
              promptVersion,
              generatedAt: new Date().toISOString()
            })
          } catch (larkError) {
            console.error('保存到飞书失败:', larkError)
            // 飞书保存失败不影响主流程
          }
        }

        return responseSuccess(aiResult)
      }

      // 测试飞书连接
      case 'testLark': {
        const { appId, appSecret, appToken, tableId } = params
        
        if (!appId || !appSecret || !appToken || !tableId) {
          throw new Error('缺少飞书配置')
        }

        const larkService = new LarkService({ appId, appSecret, appToken, tableId })
        await larkService.getAccessToken()
        await larkService.queryRecords(null, 1)
        
        return responseSuccess({ connected: true }, '飞书连接成功')
      }

      // 测试AI API
      case 'testAI': {
        const { provider, apiKey, model, apiEndpoint } = params
        
        if (!apiKey) {
          throw new Error('缺少API Key')
        }

        // 尝试调用一次
        const testPrompt = '你好，请回复"测试成功"'
        await aiService.generate(testPrompt, { provider, apiKey, model, apiEndpoint })
        
        return responseSuccess({ connected: true }, 'API连接成功')
      }

      // 获取历史记录（从飞书）
      case 'getHistory': {
        const { larkConfig, userId, pageSize = 20 } = params
        
        if (!larkConfig || !larkConfig.appId) {
          throw new Error('未配置飞书')
        }

        const larkService = new LarkService(larkConfig)
        let records
        try {
          records = await larkService.queryRecords(`Filter(字段"用户ID"="${userId}")`, pageSize)
        } catch (e) {
          const raw = await larkService.queryRecords(null, Math.min(pageSize, 50))
          const items = Array.isArray(raw?.items) ? raw.items : []
          records = {
            ...raw,
            items: items.filter((it) => it?.fields?.['用户ID'] === userId)
          }
        }

        return responseSuccess(records)
      }

      // 健康检查
      case 'health': {
        return responseSuccess({
          status: 'ok',
          version: '1.0.0',
          timestamp: new Date().toISOString()
        })
      }

      default:
        throw new Error(`未知的操作: ${action}`)
    }
  } catch (error) {
    console.error('API处理错误:', error)
    return responseError(error)
  }
}

// 导出供云函数使用
exports.main = mainHandler;

// 本地开发服务器支持
if (require.main === module) {
  const express = require('express');
  const cors = require('cors');
  
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: '10mb' }));
  
  // 模拟云端路由 (非流式)
  app.post('/api', async (req, res) => {
    try {
      const result = await mainHandler(req.body, {});
      res.status(result.success ? 200 : (result.code || 500)).json(result);
    } catch (err) {
      res.status(500).json(responseError(err));
    }
  });

  // 统一的 Chat 流式接口
  app.post('/api/chat', async (req, res) => {
    try {
      // 提取参数
      const { messages, config } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'messages are required' });
      }

      // OPC 核心直复式营销 Prompt (降维重塑版)
      const systemPrompt = `你是一个深谙独立开发者心理的顶级直复式营销专家（AI赚钱军师）。
你的受众（用户）是一群有技术/硬实力，但极度缺乏销售意识、甚至对“营销”、“割韭菜”感到羞耻的创作者（如资深程序员）。

你的核心任务是：把他们枯燥的产品/技能描述，翻译成能引发共鸣、直接带来咨询的“高逼格社交卡片文案”。
不要对他们说教！不要用AI陈词滥调（禁止使用“总而言之”、“在这个瞬息万变的时代”、“毫不夸张地说”）。

你的回复必须严格包含两部分（并且必须使用以下 XML 标签包裹）：

<analysis>
（这部分是你给用户的诊断，语气要一针见血、像懂行的合伙人）
1. [受众画像] 告诉他这东西最适合卖给哪 3 类人。
2. [破局点] 为什么他之前卖不出去（痛点），这次该怎么包装。
</analysis>

<social_card>
（这部分是前端会渲染成精美分享卡片的内容，语气必须极度自然、克制、像人话）
[标题]：一个不引人反感、略带自嘲或极客感的好奇心钩子。
[正文]：
- 痛点共鸣（说人话，比如“改了20次需求后...”）
- 你的产品如何优雅地解决它
- 价值锚点（不一定直接提钱，可以是节省的时间）
[CTA]：一个非常克制的行动呼吁（例如：“最近整理了一份内测名额，有需要的兄弟扣1我私发你”）。
</social_card>

记住：在 <social_card> 中的文案，字数必须控制在 150 字以内，多用换行，适当加几个克制的 Emoji（不要满屏都是表情包）。不要在卡片里写“标题：”、“正文：”这种前缀，直接输出纯文本内容！`;

      // 确保第一个 message 是 system prompt
      const finalMessages = [];
      if (messages[0]?.role !== 'system') {
        finalMessages.push({ role: 'system', content: systemPrompt });
      }
      finalMessages.push(...messages);

      const aiConfig = config || {};
      if (!aiConfig.apiKey) {
        return res.status(400).json({ error: 'API Key is missing' });
      }

      // 设置 SSE 头
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders();

      // 这里直接调用 openai 兼容的流式接口进行流式返回
      const provider = aiConfig.provider || 'openai';
      let endpoint = aiConfig.apiEndpoint || 'https://api.openai.com/v1';
      
      if (provider === 'deepseek') endpoint = aiConfig.apiEndpoint || 'https://api.deepseek.com/v1';
      if (provider === 'siliconflow') endpoint = aiConfig.apiEndpoint || 'https://api.siliconflow.cn/v1';
      
      let url = endpoint;
      if (!url.endsWith('/chat/completions')) {
        url = url.endsWith('/') ? `${url}chat/completions` : `${url}/chat/completions`;
      }

      const fetchOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${aiConfig.apiKey}`
        },
        body: JSON.stringify({
          model: aiConfig.model || 'gpt-4',
          messages: finalMessages,
          temperature: aiConfig.temperature || 0.7,
          stream: true
        })
      };

      // 这里复用 AIService 的 fetchWithRetry 逻辑来处理 429 和 5xx 重试
      const aiService = new AIService();
      const response = await aiService.fetchWithRetry(url, fetchOptions);

      if (!response.ok) {
        const errorText = await response.text();
        res.write(`data: ${JSON.stringify({ error: errorText })}\n\n`);
        return res.end();
      }

      // 处理流
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const data = JSON.parse(line.slice(6));
              const content = data.choices[0]?.delta?.content || '';
              if (content) {
                res.write(`data: ${JSON.stringify({ content })}\n\n`);
              }
            } catch (e) {
              // 忽略解析错误
            }
          }
        }
      }

      res.write('data: [DONE]\n\n');
      res.end();
    } catch (err) {
      console.error('Chat API Error:', err);
      res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
      res.end();
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`✅ OPC赚钱军师 Backend 启动成功!`);
    console.log(`🔗 API 挂载在: http://localhost:${PORT}/api`);
    console.log(`📌 提示: 发送 POST 请求到上述地址，请求体格式为 { "action": "xxx", "params": {} }`);
  });
}
