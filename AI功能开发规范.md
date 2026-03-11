# OPC赚钱军师 - AI功能开发规范

## 🎯 AI开发核心原则

### 技术原则
1. **用户API自主管理**：用户自行配置大模型API密钥
2. **数据主权**：所有生成内容存储在用户自己的飞书多维表格中
3. **成本透明**：API调用成本由用户自己承担和控制
4. **无状态设计**：Agent无状态，便于扩展和维护

### 直复式营销原则
1. **AITDA模型**：Attention -> Interest -> Trust -> Desire -> Action
2. **钩子思维**：每条文案必须从吸引注意力开始
3. **结果导向**：文案必须有明确的CTA（行动号召）
4. **策略透明**：向用户解释每条文案的设计策略

## 🤖 Agent架构设计

### Agent管理器基础框架
```javascript
class AgentManager {
  constructor() {
    // 用户自配置的大模型API信息
    this.aiConfig = null;
    // 飞书多维表格配置
    this.larkConfig = null;
    // 已注册的Agent列表
    this.agents = {
      'copywriting': CopywritingAgent,
      'strategy': StrategyAgent,
      'process': ProcessAgent,
      'conversion': ConversionAgent
    };
  }
  
  // 路由请求到对应Agent
  async routeRequest(agentType, skillType, userParams) {
    const AgentClass = this.agents[agentType];
    const agent = new AgentClass(this.aiConfig, this.larkConfig);
    
    return await agent.execute(skillType, userParams);
  }
}
```

### 赚钱文案Agent（首个优先Agent）
```javascript
class CopywritingAgent {
  constructor(aiConfig, larkConfig) {
    this.aiConfig = aiConfig; // 用户的大模型API配置
    this.larkConfig = larkConfig; // 用户的飞书多维表格配置
    this.skills = {
      'friendship_ads': this.generateFriendshipAds,
      'private_chat': this.generatePrivateChatScript,
      'redbook_posts': this.generateRedbookPosts,
      'official_account': this.generateOfficialAccount,
      'community_script': this.generateCommunityScript,
      'copy_diagnosis': this.diagnoseCopy
    };
  }
  
  async execute(skillType, userParams) {
    const skillFunc = this.skills[skillType];
    if (!skillFunc) {
      throw new Error(`技能 ${skillType} 不存在`);
    }
    
    // 1. 调用大模型生成内容
    const rawContent = await skillFunc.call(this, userParams);
    
    // 2. 格式化和结构化结果
    const formattedResult = this.formatResult(rawContent, skillType);
    
    // 3. 保存到飞书多维表格
    await this.saveToLarkTable(formattedResult, userParams);
    
    return formattedResult;
  }
  
  // 首个优先技能：朋友圈卖货文案
  async generateFriendshipAds(userParams) {
    const prompt = this.buildFriendshipAdsPrompt(userParams);
    
    // 调用用户自己的大模型API
    const response = await this.callAIModel({
      model: this.aiConfig.defaultModel,
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0.7
    });
    
    return response;
  }
  
  // 构建朋友圈文案prompt
  buildFriendshipAdsPrompt(userParams) {
    return `你是一个精通直复式营销的赚钱文案专家，专门为OPC（一人公司）创业者写销售文案。

我的产品/服务：${userParams.product}
目标客户：${userParams.targetAudience}
产品价格：${userParams.price}
文案目标：${userParams.objective}（直接成交/引流加微信/种草预热）
文案风格要求：${userParams.style}

请根据直复式营销的AITDA模型设计5条朋友圈卖货文案：
1. Attention（吸引注意）
2. Interest（激发兴趣）
3. Trust（建立信任）
4. Desire（创造欲望）
5. Action（促使行动）

每条文案必须包含：
- 文案正文（120-180字，自然口语化）
- 钩子类型分析（痛点型/利益型/恐惧型/反常识型/社会证明型）
- 文案策略解析（使用什么营销技巧）
- CTA设计（希望用户做什么）

请严格按照以下格式返回纯JSON数组：
[
  {
    "index": 1,
    "title": "文案①：{钩子类型}（{效果描述}）",
    "content": "{完整的文案正文}",
    "strategy_analysis": "钩子→{钩子分析}，中段→{内容分析}，结尾→{CTA分析}"
  },
  {
    "index": 2,
    "title": "文案②：{钩子类型}（{效果描述}）",
    "content": "{完整的文案正文}",
    "strategy_analysis": "钩子→{钩子分析}，中段→{内容分析}，结尾→{CTA分析}"
  },
  // ... 总共5条
]

请确保文案：
1. 口语化，像在跟朋友聊天
2. 包含具体数字和案例
3. 有清晰的行动指令
4. 符合直复式营销原则
5. 能直接复制使用`;
  }
  
  // 格式化结果
  formatResult(rawContent, skillType) {
    try {
      const contentArray = JSON.parse(rawContent);
      
      return {
        success: true,
        skill: skillType,
        count: contentArray.length,
        items: contentArray,
        generated_at: new Date().toISOString(),
        analysis: {
          total_count: contentArray.length,
          hook_types: contentArray.map(item => {
            const match = item.title.match(/文案①：(.+?)（/);
            return match ? match[1] : '未知';
          })
        }
      };
    } catch (error) {
      // 如果大模型没有返回正确JSON，尝试解析普通文本
      return this.fallbackFormat(rawContent, skillType);
    }
  }
  
  // 保存到飞书多维表格
  async saveToLarkTable(contentResult, userParams) {
    // 调用飞书API，将生成内容保存到用户的多维表格中
    // 注意：Serverless函数中转，函数本身不存储数据
    const saveData = {
      record_id: `gen_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      user_id: userParams.userId,
      agent_type: 'copywriting',
      skill_type: 'friendship_ads',
      input_params: userParams,
      output_content: contentResult,
      generated_at: new Date().toISOString(),
      strategy_tags: contentResult.analysis?.hook_types || []
    };
    
    return await this.callLarkAPI('save_record', saveData);
  }
}
```

## 📋 Agent开发优先级

### Phase 1：朋友圈卖货文案（本周完成）
**核心功能列表：**
- [ ] 基础Agent框架搭建
- [ ] 朋友圈文案生成Skill
- [ ] 大模型API调用封装
- [ ] 飞书表格保存功能

**预期输入：**
- 产品/服务描述
- 目标客户画像
- 价格区间
- 文案目标（引流/成交/种草）
- 文案风格偏好

**预期输出：**
- 5条完整的朋友圈文案+策略分析
- JSON格式结构化数据
- 自动保存到飞书多维表格

### Phase 2：私聊成交话术（下周）
**延伸功能：**
- [ ] 私聊话术Skill开发
- [ ] 异议处理分支逻辑
- [ ] 对话式交互设计

### Phase 3：文案诊断优化（下周）
**增强功能：**
- [ ] 用户粘贴已有文案
- [ ] AI逐句诊断建议
- [ ] 对比优化版本

## 🔧 技术实现要点

### 大模型API调用封装
```javascript
// AI服务封装器
class AIService {
  constructor(apiConfig) {
    this.config = apiConfig;
  }
  
  async callModel(request) {
    // 支持多个大模型提供商
    if (this.config.provider === 'openai') {
      return await this.callOpenAI(request);
    } else if (this.config.provider === 'claude') {
      return await this.callClaude(request);
    } else if (this.config.provider === 'deepseek') {
      return await this.callDeepSeek(request);
    } else {
      throw new Error('不支持的模型提供商');
    }
  }
  
  async callOpenAI(request) {
    // OpenAI API调用实现
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: request.model || 'gpt-4',
        messages: [{ role: 'user', content: request.prompt }],
        max_tokens: request.max_tokens || 1000,
        temperature: request.temperature || 0.7
      })
    });
    
    const data = await response.json();
    return data.choices[0].message.content;
  }
  
  // 其他模型类似...
}
```

### 飞书API服务封装
```javascript
// 飞书服务封装器
class LarkService {
  constructor(larkConfig) {
    this.appId = larkConfig.appId;
    this.appSecret = larkConfig.appSecret;
    this.tableId = larkConfig.tableId;
  }
  
  async saveRecord(recordData) {
    // 获取飞书access_token
    const token = await this.getAccessToken();
    
    // 向指定多维表格添加记录
    const response = await fetch(`https://open.feishu.cn/open-apis/bitable/v1/apps/${this.appId}/tables/${this.tableId}/records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        fields: {
          '记录ID': recordData.record_id,
          '用户ID': recordData.user_id,
          'Agent类型': recordData.agent_type,
          'Skill类型': recordData.skill_type,
          '生成内容': JSON.stringify(recordData.output_content),
          '生成时间': recordData.generated_at,
          '策略标签': recordData.strategy_tags?.join(', ')
        }
      })
    });
    
    return await response.json();
  }
  
  async getAccessToken() {
    // 获取飞书API访问令牌
    const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: this.appId,
        app_secret: this.appSecret
      })
    });
    
    const data = await response.json();
    return data.tenant_access_token;
  }
}
```

## 🎯 开发任务分解

### 今日目标（3月3日）
**智源负责：**
1. 🔧 **Agent管理器基础框架**
   - [ ] 创建Agent基类
   - [ ] 实现Agent路由机制
   - [ ] 设计Agent插件架构

2. 🤖 **朋友圈文案Skill实现**
   - [ ] 编写朋友圈文案prompt模板
   - [ ] 实现大模型API调用
   - [ ] 实现结果格式化

3. 🔌 **API服务封装**
   - [ ] 大模型API服务封装
   - [ ] 飞书API服务封装（基础）
   - [ ] 错误处理和重试机制

### 集成要求
1. **接口定义**：与云飞协商API接口格式
2. **数据格式**：确保前端能正确展示
3. **错误处理**：友好的用户提示
4. **性能要求**：响应时间<3秒

### 输出验证标准
1. **功能验证**：
   - 能正确接收用户参数
   - 能调用大模型生成内容
   - 能格式化返回结果
   - 能保存到飞书表格

2. **质量验证**：
   - 生成文案符合直复式营销原则
   - 包含完整的策略分析
   - 格式统一规范
   - 无重大逻辑错误

3. **性能验证**：
   - 单次调用时间<5秒
   - 并发支持5个请求
   - 内存使用<100MB

---

**开发指导原则**：
- **先完成再完善**：先实现基础功能，再优化细节
- **测试驱动**：每个Skill都应有对应的测试用例
- **文档同步**：代码注释清晰，接口文档完善
- **安全第一**：不存储用户敏感数据，API密钥安全处理

**紧急联系人**：JJ（出现技术阻塞时立即汇报）

🐾 **首战必胜！朋友圈文案Agent必须一炮打响！**