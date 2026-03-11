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

// API处理函数
exports.main = async (event, context) => {
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

        // 1. 调用AI服务生成内容
        const aiResult = await agentManager.processRequest(
          agentType, 
          skillType, 
          {
            ...(userParams || {}),
            aiConfig
          },
          aiService
        )

        // 2. 如果用户配置了飞书，保存到用户的多维表格
        const larkConfig = (config && config.larkConfig) || null
        if (larkConfig && larkConfig.appId) {
          try {
            const larkService = new LarkService(larkConfig)
            await larkService.saveGenerationRecord({
              userId: userParams.userId || 'anonymous',
              agentType,
              skillType,
              inputParams: userParams,
              outputContent: aiResult,
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
