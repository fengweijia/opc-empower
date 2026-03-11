/**
 * OPC赚钱军师 - 私聊成交话术Skill
 * 处理一对一私聊场景的成交话术
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class PrivateChatSkill {
  constructor() {
    // 异议处理库
    this.objectionHandlers = {
      '太贵了': [
        {
          type: '价值锚定',
          content: '市面上同类型课程9800元，我只收199元，还包含1对1咨询。你算下来，每天不到7块钱，一杯咖啡的钱。',
          psychology: '价格锚定 + 对比效应'
        },
        {
          type: '拆解日均',
          content: '199元分解到每天，就是不到7块钱。但学会后，你每月能多赚1万+。投资回报率5000%。',
          psychology: '投资回报率'
        },
        {
          type: '结果导向',
          content: '学员平均4天就赚回学费。你觉得不值吗？如果不盈利，我退你钱。',
          psychology: '结果承诺 + 风险逆转'
        }
      ],
      '我再考虑考虑': [
        {
          type: '紧迫感',
          content: '名额仅剩最后3个，今晚12点涨价到399元。早报名早受益，犹豫等于错过。',
          psychology: '稀缺性 + 紧迫感'
        },
        {
          type: '风险逆转',
          content: '不满意随时退，没有任何风险。为什么不在今天给自己一个机会？',
          psychology: '零风险承诺'
        },
        {
          type: '默认成交',
          content: '我帮你名额锁定，先占上。你考虑清楚后随时可以取消，不会有任何损失。',
          psychology: '默认成交法'
        }
      ],
      '没时间': [
        {
          type: '碎片化学习',
          content: '每天15分钟就行，早晨地铁、午休、晚上睡前都可以学。不需要整块时间。',
          psychology: '降低门槛'
        },
        {
          type: '快速见效',
          content: '第一节课学完就能用，帮你省出每天2小时。学的越早，省的时间越多。',
          psychology: '即时收益'
        },
        {
          type: '灵活安排',
          content: '课程永久可看，随时回听。春节期间我也在，有问题随时问我。',
          psychology: '灵活性 + 持续支持'
        }
      ],
      '适合我吗': [
        {
          type: '案例展示',
          content: '和你一样背景的学员已经28人学会了。他们能做到，你也能。',
          psychology: '社会证明'
        },
        {
          type: '需求匹配',
          content: '你的问题是XXX对吧？这个课程正是帮你解决这个问题的。',
          psychology: '需求匹配'
        },
        {
          type: '测试方案',
          content: '你可以先花9.9元体验一下，觉得有用再升级正价课。',
          psychology: '免费/低价试用'
        }
      ],
      '有没有效果保证': [
        {
          type: '退款保证',
          content: '7天内无理由退款，学完不满意我退你钱。你没有任何风险。',
          psychology: '零风险承诺'
        },
        {
          type: '结果承诺',
          content: '按照课程做，30天内没效果，我全额退款。',
          psychology: '结果导向'
        },
        {
          type: '见证展示',
          content: '看看这些学员的反馈，他们都是最好的证明。',
          psychology: '社会证明'
        }
      ]
    }
  }

  /**
   * 生成私聊话术
   * @param {Object} params 参数
   * @param {string} params.product 产品
   * @param {string} params.targetAudience 目标客户
   * @param {string} params.price 价格
   * @param {string} params.customerStage 客户阶段
   */
  async generate(params) {
    const { product, targetAudience, price, customerStage } = params;

    // 根据客户阶段选择不同的话术策略
    const strategy = this.getStrategyByStage(customerStage);

    return {
      success: true,
      strategy: strategy.name,
      steps: [
        {
          step: '开场白',
          content: this.generateOpening(product, targetAudience),
          tips: '开头3句话内建立好感，表明身份+提供价值+降低防备'
        },
        {
          step: '需求挖掘',
          content: this.generateDiscovery(targetAudience),
          tips: '问开放式问题，了解痛点和预算'
        },
        {
          step: '产品介绍',
          content: this.generateIntro(product, price),
          tips: '用FAB法则：特性-优势-好处'
        },
        {
          step: '异议处理',
          tips: '针对常见异议的准备',
          // 动态生成异议处理
        },
        {
          step: '促成交易',
          content: this.generateClose(price),
          tips: '假设成交法/默认成交法/紧迫感成交'
        },
        {
          step: '跟进策略',
          content: this.generateFollowUp(),
          tips: '成交后超预期+追销时机'
        }
      ],
      objectionHandling: this.objectionHandlers,
      timestamp: new Date().toISOString()
    };
  }

  // 根据客户阶段获取策略
  getStrategyByStage(stage) {
    const strategies = {
      '陌生': {
        name: '破冰策略',
        focus: '建立信任，找出需求'
      },
      '意向': {
        name: '价值传递',
        focus: '展示效果，解决疑虑'
      },
      '已有咨询': {
        name: '促单策略',
        focus: '推动决策，创造紧迫'
      },
      '未成交': {
        name: '激活策略',
        focus: '重新激活，提供价值'
      }
    };
    return strategies[stage] || strategies['陌生'];
  }

  // 生成开场白
  generateOpening(product, audience) {
    return `嗨，我是${product}的创始人。

看你最近在研究${audience}相关的内容，这个领域我研究了3年，帮助200+人实现了收入提升。

不浪费你时间，我帮你看看目前卡在哪了？
`;
  }

  // 生成需求挖掘问题
  generateDiscovery(audience) {
    return `在开始之前，想先了解几个问题：

1. 你现在最大的挑战是什么？（是获客、转化、还是产品？）
2. 目前收入是多少？希望提升到多少？
3. 每天有多少时间可以投入？

你分别告诉我，咱们一起找找突破口。`;
  }

  // 生成产品介绍
  generateIntro(product, price) {
    return `${product}是专门帮像你这样的人打造的：

✅ 核心方法论（别人教不会的）
✅ 实操案例（可直接复制）
✅ 变现路径（清晰可执行）
✅ 专属社群（互相取暖）

目前价格${price}，今晚12点恢复原价399元。

你今天报名，我额外送你：
- 1对1诊断（价值299元）
- 内部群终身答疑

`;
  }

  // 生成促成交易
  generateClose(price) {
    return `这样，我帮你锁定今天的名额。

先占上，199元。不满意随时退，你没有任何损失。

名额就剩最后3个了，凌晨就涨价。你考虑好回复我，我帮你办理。

`;
  }

  // 生成跟进策略
  generateFollowUp() {
    return `成交后：
- 2小时内：发送课程链接 + 欢迎私信
- 24小时：第一次价值输出（分享干货）
- 48小时：询问学习进度，提供帮助
- 7天：第一次追销（升级服务/转介绍）

未成交：
- 每天：朋友圈价值输出
- 每3天：私信一条干货
- 每7天：一次激活（如限时优惠）`;
  }

  // 处理特定异议
  handleObjection(objectionType) {
    return this.objectionHandlers[objectionType] || [];
  }
}

module.exports = { PrivateChatSkill };