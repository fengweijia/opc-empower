/**
 * OPC赚钱军师 - Agent管理器
 * 负责协调所有Agent的请求分发和执行
 * 
 * 修改记录:
 * 2026-03-10: 引入prompts模块，优化文案Prompt模板
 */

// 引入Prompt模板
const copywritingPrompts = require('../prompts/copywriting-prompts')
const conversionPrompts = require('../prompts/conversion-prompts')
const strategyProcessPrompts = require('../prompts/strategy-process-prompts')

// 引入Skills模块 (2026-03-10 小白添加)
const { PrivateChatSkill } = require('../skills/private-chat')

class AgentManager {
  constructor() {
    this.agents = new Map()
    this.registerDefaultAgents()
  }

  // 注册默认的Agent
  registerDefaultAgents() {
    // 赚钱文案Agent
    this.agents.set('copywriting', {
      name: '赚钱文案Agent',
      description: '生成朋友圈、私聊、小红书等卖货文案',
      skills: ['friendship_ads', 'private_chat', 'redbook_posts', 'official_account', 'community_script', 'copy_diagnosis'],
      handler: this.handleCopywritingRequest.bind(this)
    })

    // 赚钱策略Agent
    this.agents.set('strategy', {
      name: '赚钱策略Agent',
      description: '提供赚钱定位、定价、获客等策略建议',
      skills: ['positioning', 'pricing', 'channel', 'competitor'],
      handler: this.handleStrategyRequest.bind(this)
    })

    // 赚钱流程Agent
    this.agents.set('process', {
      name: '赚钱流程Agent',
      description: '设计成交漏斗、发售脚本等自动化流程',
      skills: ['funnel_design', 'launch_script', 'automation', 'referral'],
      handler: this.handleProcessRequest.bind(this)
    })

    // 成交转化Agent
    this.agents.set('conversion', {
      name: '成交转化Agent',
      description: '提供价格锚定、异议处理等成交技巧',
      skills: ['price_anchor', 'objection_handling', 'social_proof', 'scarcity', 'upsell'],
      handler: this.handleConversionRequest.bind(this)
    })
  }

  // 处理赚钱文案请求
  async handleCopywritingRequest(skillType, params, aiService) {
    // 如果没有配置AI，返回模拟数据
    if (!params.aiConfig || !params.aiConfig.apiKey) {
      console.log('使用模拟数据（未配置AI API）')
      return this.getMockCopywritingResponse(skillType, params)
    }
    
    try {
      const prompt = this.buildCopywritingPrompt(skillType, params)
      const response = await aiService.generate(prompt, params.aiConfig)
      return this.formatCopywritingResponse(response, skillType)
    } catch (error) {
      console.error('AI生成失败，使用模拟数据:', error.message)
      return this.getMockCopywritingResponse(skillType, params)
    }
  }

  // 构建文案prompt - 使用独立prompts模块
  // 2026-03-10: 优化为AITDA模型完整模板
  buildCopywritingPrompt(skillType, params) {
    // 获取对应skill的prompt模板
    let promptTemplate = copywritingPrompts[skillType];
    
    if (!promptTemplate) {
      console.log(`[Warning] Prompt模板 ${skillType} 不存在，使用默认模板`);
      promptTemplate = copywritingPrompts.default || '请生成适合的内容';
    }
    
    // 替换模板变量
    let prompt = promptTemplate
      .replace(/\{\{product\}\}/g, params.product || '待填写')
      .replace(/\{\{targetAudience\}\}/g, params.targetAudience || '待填写')
      .replace(/\{\{price\}\}/g, params.price || '待填写')
      .replace(/\{\{objective\}\}/g, params.objective || '直接成交')
      .replace(/\{\{style\}\}/g, params.style || '口语化自然')
      .replace(/\{\{customerStage\}\}/g, params.customerStage || '陌生')
      .replace(/\{\{days\}\}/g, params.days || '7')
      .replace(/\{\{copy\}\}/g, params.copy || '');
    
    return prompt;
  }

  // 获取模拟文案响应
  getMockCopywritingResponse(skillType, params) {
    const mockData = [
      {
        index: 1,
        title: '文案①：痛点型（戳中焦虑）',
        content: `做运营3年，每天重复着\n复制粘贴、导数据、做日报。\n\n直到我用Python写了个脚本，\n把8小时的活压缩到15分钟。\n\n老板以为我在加班冲业绩，\n其实我在带薪摸鱼。\n\n我把这套方法整理成了课，\n0基础也能学会。\n限时199，今晚12点恢复399。\n👇 扫码了解`,
        strategy_analysis: '钩子→痛点共鸣（运营日常焦虑），中段→个人故事（社会证明），结尾→CTA+限时紧迫感'
      },
      {
        index: 2,
        title: '文案②：成果型（展示结果）',
        content: `3个月前，我还是个月薪5千的运营。\n\n现在，我用 Python 自动化，\n每月多赚 1 万 2。\n\n不需要写代码基础，\n只要会用电脑就能学。\n\n29 个人已经报名，\n平均 4 天回本。\n\n名额有限，扫码抢占。`,
        strategy_analysis: '钩子→成果展示（收入数字冲击），中段→数据证明（29人平均4天回本），结尾→紧迫感（名额有限）'
      },
      {
        index: 3,
        title: '文案③：对话型（场景代入）',
        content: `粉丝私信问我：\n"博主，我工资月光，想学点技能该咋整？"\n\n我说：别急着报班，\n先试试用 Python 自动化你的工作。\n\n她学了 2 周，\n现在每天少干 2 小时，\n还能用技能接副业。\n\n想了解的，点下方链接。`,
        strategy_analysis: '钩子→粉丝提问（场景代入），中段→案例故事（真实案例），结尾→行动引导'
      }
    ]
    
    return {
      success: true,
      data: mockData,
      format: 'json',
      isMock: true,
      message: '使用模拟数据（配置AI API后可使用真实生成）'
    }
  }

  // 格式化文案响应
  formatCopywritingResponse(rawResponse, skillType) {
    try {
      // 尝试解析JSON
      const content = JSON.parse(rawResponse)
      return {
        success: true,
        data: content,
        format: 'json',
        isMock: false
      }
    } catch (e) {
      // 如果不是JSON，直接返回文本
      return {
        success: true,
        data: rawResponse,
        format: 'text',
        isMock: false
      }
    }
  }

  // 处理策略请求
  async handleStrategyRequest(skillType, params, aiService) {
    // 类似文案处理
    return { success: true, data: '策略生成功能开发中...' }
  }

  // 处理流程请求 (2026-03-11 小白实现Agent 3)
  async handleProcessRequest(skillType, params, aiService) {
    // 如果没有配置AI，返回模拟数据
    if (!params.aiConfig || !params.aiConfig.apiKey) {
      console.log('使用模拟数据（未配置AI API）')
      return this.getMockProcessResponse(skillType, params)
    }
    
    try {
      const prompt = this.buildProcessPrompt(skillType, params)
      const response = await aiService.generate(prompt, params.aiConfig)
      return this.formatProcessResponse(response, skillType)
    } catch (error) {
      console.error('AI生成失败，使用模拟数据:', error.message)
      return this.getMockProcessResponse(skillType, params)
    }
  }

  // 构建流程prompt
  buildProcessPrompt(skillType, params) {
    let promptTemplate = strategyProcessPrompts[skillType]
    
    if (!promptTemplate) {
      console.log(`[Warning] Process prompt ${skillType} 不存在，使用默认模板`)
      promptTemplate = '请生成适合的流程策略内容'
    }
    
    // 替换模板变量
    let prompt = promptTemplate
      .replace(/\{\{product\}\}/g, params.product || '待填写')
      .replace(/\{\{targetAudience\}\}/g, params.targetAudience || '待填写')
      .replace(/\{\{price\}\}/g, params.price || '待填写')
      .replace(/\{\{niche\}\}/g, params.niche || '待填写')
      .replace(/\{\{currentStatus\}\}/g, params.currentStatus || '待填写')
      .replace(/\{\{strengths\}\}/g, params.strengths || '待填写')
      .replace(/\{\{challenges\}\}/g, params.challenges || '待填写')
      .replace(/\{\{cost\}\}/g, params.cost || '待填写')
      .replace(/\{\{existingChannels\}\}/g, params.existingChannels || '待填写')
      .replace(/\{\{channel\}\}/g, params.channel || '待填写')
      .replace(/\{\{competitorUrl\}\}/g, params.competitorUrl || '待填写')
      .replace(/\{\{competitorName\}\}/g, params.competitorName || '待填写')
      .replace(/\{\{days\}\}/g, params.days || '7')
      .replace(/\{\{basePrice\}\}/g, params.basePrice || '待填写')
      .replace(/\{\{upsellProduct\}\}/g, params.upsellProduct || '待填写')
      .replace(/\{\{existingProduct\}\}/g, params.existingProduct || '待填写')
    
    return prompt
  }

  // 获取模拟流程响应
  getMockProcessResponse(skillType, params) {
    const mockData = {
      funnel_design: {
        overview: '基于Russell Brunson理论的自动化成交流程',
        layers: [
          {
            name: '引流层',
            description: '入口设计，吸引目标客户',
            tactics: [
              { name: '免费内容引流', content: '撰写高价值文章/笔记，投放到公众号/小红书' },
              { name: '诱饵引流', content: '提供免费资源（电子书、工具包）换取联系方式' }
            ],
            script: '扫码免费领取《OPC赚钱实战指南》，回复"666"入群'
          },
          {
            name: '培育层',
            description: '价值输出，建立信任',
            tactics: [
              { name: '每日干货', content: '社群每日分享赚钱干货' },
              { name: '案例分享', content: '定期分享成功案例和变现故事' }
            ],
            script: '今天来聊聊我是如何从0做到月入10万的...'
          },
          {
            name: '激活层',
            description: '初次接触，推动尝试',
            tactics: [
              { name: '限量体验', content: '提供9.9元体验课' },
              { name: '1v1诊断', content: '免费诊断机会' }
            ],
            script: '看你一直在研究这个，我这里有个免费诊断名额...'
          },
          {
            name: '成交层',
            description: '转化设计，推动购买',
            tactics: [
              { name: '限时优惠', content: '24小时内付款享早鸟价' },
              { name: '稀缺名额', content: '本期仅收20人' }
            ],
            script: '课程明天涨价，现在是最后机会...'
          },
          {
            name: '追销层',
            description: '复购/转介绍',
            tactics: [
              { name: '会员复购', content: '老学员续费优惠' },
              { name: '转介绍奖励', content: '推荐一人返现100' }
            ],
            script: '感谢你的信任！如果你身边有朋友也需要...'
          }
        ]
      },
      launch_script: {
        product: params.product || '产品',
        days: 7,
        schedule: [
          {
            day: 1,
            theme: '痛点故事',
            content: {
              Moments: [
                '最近很多粉丝问我：为什么努力很久还是赚不到钱？',
                '其实我也曾是你们中的一员...',
                '直到我发现了这个秘密通道...'
              ],
              Group: '今天我们来聊聊赚钱路上最大的坑',
              Private: '看你对这个领域有兴趣，我当年也是这样过来的...'
            }
          },
          {
            day: 2,
            theme: '干货价值',
            content: {
              Moments: [
                '昨天说了痛点，今天来点实在的...',
                '分享一个我验证过的方法，',
                '新人也能直接上手...'
              ],
              Group: '今天分享3个超实用的获客技巧',
              Private: '上次说的方法试了吗？有个关键点忘了说...'
            }
          },
          {
            day: 3,
            theme: '客户见证',
            content: {
              Moments: [
                '学员@小王 上周收入突破3万+',
                '从0基础到变现，他只用了14天',
                '这是他今天给我的反馈...'
              ],
              Group: '来看看学员们的真实成绩单',
              Private: '你是我见过执行最快的学员之一'
            }
          },
          {
            day: 4,
            theme: '方法论揭秘',
            content: {
              Moments: [
                '前3天铺垫做完，今天来硬的',
                '把我的完整方法论整理出来了',
                '看完这篇你就知道该怎么做了'
              ],
              Group: '揭秘：我是如何设计变现闭环的',
              Private: '方法学会了不？要不要带你走一遍？'
            }
          },
          {
            day: 5,
            theme: '产品发布+早鸟价',
            content: {
              Moments: [
                '磨了很久的课程终于来了',
                '原价999，早鸟价仅需299',
                '今天报名额外赠送...'
              ],
              Group: '【重磅】我的第一期训练营正式招生',
              Private: '我一直想做的课程终于好了，第一个想到你'
            }
          },
          {
            day: 6,
            theme: '答疑',
            content: {
              Moments: [
                '整理了大家最关心的10个问题',
                '关于课程的任何疑问都可以问',
                '今晚8点直播答疑...'
              ],
              Group: '答疑专场：关于课程的都在这里',
              Private: '还有犹豫的地方吗？我来帮你分析'
            }
          },
          {
            day: 7,
            theme: '倒计时+涨价',
            content: {
              Moments: [
                '明早9点准时涨价到599',
                '最后18个名额',
                '今天不报名，明天多花300'
              ],
              Group: '最后倒计时！涨价前最后一波',
              Private: '明早就涨价了真的不考虑？'
            }
          }
        ]
      },
      automation: {
        content: [
          {
            name: '公众号自动回复',
            trigger: '关键词触发',
            template: '感谢关注！回复不同数字获取不同资料：\n1. 免费课程\n2. 案例合集\n3. 联系我'
          },
          {
            name: '微信好友欢迎语',
            trigger: '新好友添加',
            template: '哈喽！我是XX\n很高兴认识你\n\n回复"666"领取《OPC赚钱实战指南》\n\n对了，你是做什么行业的？'
          },
          {
            name: '社群每日SOP',
            schedule: [
              { time: '7:00', content: '早安分享+今日干货' },
              { time: '12:00', content: '学员案例/变现故事' },
              { time: '18:00', content: '干货强化/方法论' },
              { time: '21:00', content: '互动话题/答疑' }
            ]
          },
          {
            name: '朋友圈发布节奏',
            schedule: [
              { day: '周一', content: '干货分享' },
              { day: '周二', content: '案例展示' },
              { day: '周三', content: '个人故事' },
              { day: '周四', content: '方法论' },
              { day: '周五', content: '学员反馈' },
              { day: '周六', content: '产品/活动' },
              { day: '周日', content: '休息互动' }
            ]
          },
          {
            name: '私聊跟进节奏',
            schedule: [
              { trigger: '添加好友', action: '立即发送欢迎语' },
              { trigger: '48小时无互动', action: '发送价值内容' },
              { trigger: '7天未成交', action: '发送限时优惠' },
              { trigger: '14天未成交', action: '发送案例见证' }
            ]
          }
        ]
      },
      referral: {
        overview: '老带新激励机制设计',
        mechanics: [
          {
            name: '现金返现',
            description: '老学员推荐新学员成交，返还100元现金',
            rule: '新学员付款后立即发放'
          },
          {
            name: '赠品升级',
            description: '老学员推荐1人，课程赠品升级',
            rule: '推荐3人可直接升级为VIP学员'
          },
          {
            name: '专属海报',
            description: '提供专属裂变海报和话术',
            content: '海报+话术模板+素材包'
          },
          {
            name: '裂变流程',
            steps: [
              '1. 老学员生成专属推荐海报',
              '2. 分享到朋友圈/社群',
              '3. 新学员扫码添加客服',
              '4. 客服确认来源，发放奖励'
            ]
          }
        ],
        templates: {
          friend: 'XX，我最近在学的XX课程特别棒，老师讲得很实战，推荐给你！',
          moments: '我在学这个课程，已经赚回学费了。有需要的可以私信我推荐，有优惠~'
        }
      }
    }
    
    return {
      success: true,
      skill: skillType,
      data: mockData[skillType] || { message: '功能开发中' },
      isMock: true
    }
  }

  // 格式化流程响应
  formatProcessResponse(rawResponse, skillType) {
    try {
      const content = JSON.parse(rawResponse)
      return { success: true, data: content, isMock: false }
    } catch (e) {
      return { success: true, data: rawResponse, isMock: false }
    }
  }

  // 处理转化请求 (2026-03-10 小白优化：支持conversion-prompts)
  async handleConversionRequest(skillType, params, aiService) {
    // 如果没有配置AI，返回模拟数据
    if (!params.aiConfig || !params.aiConfig.apiKey) {
      console.log('使用模拟数据（未配置AI API）')
      return this.getMockConversionResponse(skillType, params)
    }
    
    try {
      const prompt = this.buildConversionPrompt(skillType, params)
      const response = await aiService.generate(prompt, params.aiConfig)
      return this.formatConversionResponse(response, skillType)
    } catch (error) {
      console.error('AI生成失败，使用模拟数据:', error.message)
      return this.getMockConversionResponse(skillType, params)
    }
  }

  // 构建转化prompt
  buildConversionPrompt(skillType, params) {
    let promptTemplate = conversionPrompts[skillType];
    
    if (!promptTemplate) {
      console.log(`[Warning] Conversion prompt ${skillType} 不存在`);
      promptTemplate = '请生成适合的转化策略内容';
    }
    
    // 替换模板变量
    let prompt = promptTemplate
      .replace(/\{\{product\}\}/g, params.product || '待填写')
      .replace(/\{\{price\}\}/g, params.price || '待填写')
      .replace(/\{\{basePrice\}\}/g, params.basePrice || '待填写')
      .replace(/\{\{cost\}\}/g, params.cost || '待填写')
      .replace(/\{\{targetAudience\}\}/g, params.targetAudience || '待填写')
      .replace(/\{\{existingProduct\}\}/g, params.existingProduct || '待填写')
      .replace(/\{\{upsellProduct\}\}/g, params.upsellProduct || '待填写');
    
    return prompt;
  }

  // 获取模拟转化响应
  getMockConversionResponse(skillType, params) {
    const mockData = {
      price_anchor: {
        anchor_strategies: [
          { type: '高价锚定法', description: '对比市面价格' },
          { type: '拆解日均法', description: '每天不到一杯咖啡钱' }
        ],
        recommended_strategy: '推荐使用拆解日均法，配合限时优惠'
      },
      objection_handling: {
        objections: [
          {
            category: '价格类',
            objectio: '太贵了',
            solutions: [
              { type: '价值导向', content: '算下投资回报率...' },
              { type: '风险逆转', content: '不满意7天无理由退款...' }
            ]
          }
        ]
      }
    };
    
    return {
      success: true,
      skill: skillType,
      data: mockData[skillType] || { message: '功能开发中' },
      isMock: true
    };
  }

  // 格式化转化响应
  formatConversionResponse(rawResponse, skillType) {
    try {
      const content = JSON.parse(rawResponse);
      return { success: true, data: content, isMock: false };
    } catch (e) {
      return { success: true, data: rawResponse, isMock: false };
    }
  }

  // 主入口：处理请求
  async processRequest(agentType, skillType, params, aiService) {
    const agent = this.agents.get(agentType)
    
    if (!agent) {
      throw new Error(`Agent ${agentType} 不存在`)
    }

    if (!agent.skills.includes(skillType)) {
      throw new Error(`Skill ${skillType} 在 Agent ${agentType} 中不存在`)
    }

    // 调用对应的handler
    return await agent.handler(skillType, params, aiService)
  }

  // 获取可用的Agent列表
  getAvailableAgents() {
    return Array.from(this.agents.entries()).map(([key, value]) => ({
      id: key,
      name: value.name,
      description: value.description,
      skills: value.skills
    }))
  }
}

// 导出
module.exports = { AgentManager }