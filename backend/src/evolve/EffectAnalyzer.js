/**
 * OPC赚钱军师 - 效果反馈分析服务
 * 分析用户实际使用效果
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class EffectAnalyzer {
  constructor() {
    // 效果评分指标
    this.metrics = {
      // 即时评分权重
      immediate: {
        rating_4: 1.0,  // 超赞
        rating_3: 0.7,  // 不错
        rating_2: 0.3,  // 一般
        rating_1: 0     // 没用
      },
      // 使用率权重
      usage: {
        used_immediately: 1.0,
        modified_then_used: 0.7,
        not_used: -0.2
      },
      // 追踪转化权重
      conversion: {
        has_inquiry: 0.5,
        has_deal: 1.0,
        has_revenue: 1.5
      }
    }
  }

  /**
   * 计算内容效果分
   * @param {Object} content 生成的内容
   * @param {Object} feedback 用户反馈
   */
  calculateEffectScore(content, feedback) {
    let score = 0

    // 1. 即时评分
    if (feedback.user_rating) {
      score += this.metrics.immediate[`rating_${feedback.user_rating}`] * 40
    }

    // 2. 使用情况
    if (feedback.used) {
      score += this.metrics.usage[feedback.used_as_is ? 'used_immediately' : 'modified_then_used'] * 30
    } else {
      score += this.metrics.usage.not_used * 10
    }

    // 3. 追踪转化
    if (feedback.inquiry_count > 0) {
      score += this.metrics.conversion.has_inquiry * Math.min(feedback.inquiry_count * 0.1, 0.5) * 30
    }
    if (feedback.deal_count > 0) {
      score += this.metrics.conversion.has_deal * Math.min(feedback.deal_count * 0.3, 1.0) * 30
    }
    if (feedback.deal_amount > 0) {
      score += this.metrics.conversion.has_revenue * Math.min(feedback.deal_amount / 1000, 1.0) * 30
    }

    return Math.min(score, 100) // 最高100分
  }

  /**
   * 分析最佳内容特征
   * @param {Array} contentList 内容列表
   */
  analyzeBestPatterns(contentList) {
    const patterns = {
      by_hook_type: {},
      by_length: {},
      by_style: {},
      by_skill: {}
    }

    contentList.forEach(content => {
      // 按钩子类型分析
      if (content.hook_type) {
        if (!patterns.by_hook_type[content.hook_type]) {
          patterns.by_hook_type[content.hook_type] = { total: 0, count: 0 }
        }
        patterns.by_hook_type[content.hook_type].total += content.effect_score || 0
        patterns.by_hook_type[content.hook_type].count += 1
      }

      // 按长度分析
      const length = content.content?.length || 0
      const lengthBucket = length < 100 ? 'short' : length < 200 ? 'medium' : 'long'
      if (!patterns.by_length[lengthBucket]) {
        patterns.by_length[lengthBucket] = { total: 0, count: 0 }
      }
      patterns.by_length[lengthBucket].total += content.effect_score || 0
      patterns.by_length[lengthBucket].count += 1
    })

    // 计算平均值
    Object.keys(patterns).forEach(category => {
      Object.keys(patterns[category]).forEach(key => {
        const item = patterns[category][key]
        item.avg_score = item.count > 0 ? item.total / item.count : 0
      })
    })

    return patterns
  }

  /**
   * 生成智能建议
   * @param {Object} patterns 内容特征分析
   */
  generateInsights(patterns) {
    const insights = []

    // 找出最佳钩子类型
    const hookTypes = Object.entries(patterns.by_hook_type)
      .sort((a, b) => b[1].avg_score - a[1].avg_score)
    
    if (hookTypes.length > 0 && hookTypes[0][1].count >= 3) {
      insights.push({
        type: 'best_hook',
        content: `效果最好的钩子类型是"${hookTypes[0][0]}"，平均得分${hookTypes[0][1].avg_score.toFixed(1)}分`,
        action: '建议在prompt中优先使用该类型钩子'
      })
    }

    // 找出最佳长度
    const lengths = Object.entries(patterns.by_length)
      .sort((a, b) => b[1].avg_score - a[1].avg_score)
    
    if (lengths.length > 0) {
      insights.push({
        type: 'best_length',
        content: `最佳文案长度是"${lengths[0][0]}"范围，平均得分${lengths[0][1].avg_score.toFixed(1)}分`,
        action: `建议将prompt中的长度要求调整为${lengths[0][0]}范围`
      })
    }

    return insights
  }

  /**
   * 生成周报数据
   * @param {Object} stats 统计数据
   */
  generateWeeklyReport(stats) {
    return {
      period: `${stats.start_date} - ${stats.end_date}`,
      summary: {
        total_generated: stats.total_generated || 0,
        total_used: stats.total_used || 0,
        usage_rate: stats.total_generated ? 
          ((stats.total_used / stats.total_generated) * 100).toFixed(1) + '%' : '0%',
        total_revenue: stats.total_revenue || 0,
        avg_effect_score: stats.avg_effect_score?.toFixed(1) || '0'
      },
      top_content: stats.top_content || [],
      insights: stats.insights || [],
      recommendations: stats.recommendations || []
    }
  }
}

module.exports = { EffectAnalyzer };