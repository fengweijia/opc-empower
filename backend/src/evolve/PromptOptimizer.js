/**
 * OPC赚钱军师 - Prompt优化器
 * 基于用户反馈自动优化Prompt
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class PromptOptimizer {
  constructor() {
    // 改进标签权重
    this.improvementWeights = {
      '不够接地气': 2,
      '太长了': 1.5,
      '太短了': 1.5,
      '不像我的风格': 2,
      '缺少案例': 1.5,
      '卖点不够突出': 2,
      '不够口语化': 2,
      '缺少数字': 1,
      '太专业了': 2,
      '太简单了': 1
    }
  }

  /**
   * 分析反馈数据
   * @param {Array} feedbackList 用户反馈列表
   */
  analyzeFeedback(feedbackList) {
    const tagCounts = {}
    const scoreByTag = {}
    const totalByTag = {}

    feedbackList.forEach(feedback => {
      // 统计改进标签
      if (feedback.improvement_tags) {
        feedback.improvement_tags.forEach(tag => {
          tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
      }

      // 关联评分和标签
      if (feedback.user_rating && feedback.improvement_tags) {
        feedback.improvement_tags.forEach(tag => {
          if (!scoreByTag[tag]) {
            scoreByTag[tag] = 0
            totalByTag[tag] = 0
          }
          scoreByTag[tag] += feedback.user_rating
          totalByTag[tag] += 1
        })
      }
    })

    // 计算每个标签的平均评分影响
    const tagAnalysis = Object.keys(tagCounts).map(tag => ({
      tag,
      count: tagCounts[tag],
      avg_rating: totalByTag[tag] ? scoreByTag[tag] / totalByTag[tag] : 3,
      weight: this.improvementWeights[tag] || 1
    })).sort((a, b) => b.count - a.count)

    return {
      total_feedback: feedbackList.length,
      tag_counts: tagCounts,
      tag_analysis: tagAnalysis,
      top_issues: tagAnalysis.slice(0, 5)
    }
  }

  /**
   * 生成Prompt优化建议
   * @param {Object} analysis 分析结果
   * @param {string} skillName 技能名称
   */
  generateOptimizationSuggestions(analysis, skillName) {
    const suggestions = []

    analysis.top_issues.forEach(item => {
      const suggestions_map = {
        '不够接地气': `在${skillName}的prompt中增加：
- "语气要求：口语化，像跟朋友聊天"
- "避免使用专业术语，用客户的语言"`,

        '太长了': `在${skillName}的prompt中增加：
- "长度控制：每条文案控制在XX字以内"
- "简洁有力，直击要点"`,

        '太短了': `在${skillName}的prompt中增加：
- "内容要求：至少包含XX个具体要点"
- "适当展开，增加细节"`,

        '不像我的风格': `在${skillName}的prompt中增加：
- "风格要求：参考用户的表达习惯"
- "可通过历史记录学习用户偏好"`,

        '缺少案例': `在${skillName}的prompt中增加：
- "必须包含至少1-2个具体案例或数据"
- "案例要具体、可信、有说服力"`,

        '卖点不够突出': `在${skillName}的prompt中增加：
- "强调核心卖点，用数字量化"
- "对比展示：之前VS之后"`,

        '不够口语化': `在${skillName}的prompt中增加：
- "使用口头禅、俗语、拉近关系"
- "避免书面语、官话"`,

        '缺少数字': `在${skillName}的prompt中增加：
- "必须包含具体数字：收入、时间、人数等"
- "避免使用'很多'、'一些'等模糊词"`
      }

      if (suggestions_map[item.tag]) {
        suggestions.push({
          tag: item.tag,
          occurrence: item.count,
          suggestion: suggestions_map[item.tag]
        })
      }
    })

    return suggestions
  }

  /**
   * 生成优化后的新Prompt版本
   * @param {string} originalPrompt 原始prompt
   * @param {Array} suggestions 优化建议
   */
  generateOptimizedPrompt(originalPrompt, suggestions) {
    let optimized = originalPrompt

    suggestions.forEach(item => {
      // 根据建议类型追加到prompt
      const additions = {
        '不够接地气': '\n\n⚠️ 特别注意：必须使用口语化表达，像跟朋友聊天一样自然。',
        '太长了': '\n\n⚠️ 特别注意：文案长度控制在150字以内，简洁有力。',
        '太短了': '\n\n⚠️ 特别注意：内容要丰富，每点都要展开说明。',
        '不够口语化': '\n\n⚠️ 特别注意：使用通俗易懂的语言，避免专业术语。',
        '缺少数字': '\n\n⚠️ 特别注意：必须加入具体数字，如99元、3天、10倍等。',
        '缺少案例': '\n\n⚠️ 特别注意：加入1-2个真实案例或数据支撑。'
      }

      if (additions[item.tag]) {
        optimized += additions[item.tag]
      }
    })

    return optimized
  }

  /**
   * 准备A/B测试
   * @param {string} skillName 技能名
   * @param {string} v1Prompt v1版本prompt
   * @param {string} v2Prompt v2版本prompt
   */
  prepareABTest(skillName, v1Prompt, v2Prompt) {
    return {
      test_id: `ab_${Date.now()}`,
      skill_name: skillName,
      variants: {
        v1: {
          prompt: v1Prompt,
          traffic_split: 50
        },
        v2: {
          prompt: v2Prompt,
          traffic_split: 50
        }
      },
      start_time: new Date().toISOString(),
      end_time: null,
      status: 'pending'
    }
  }
}

/**
 * Prompt版本管理器
 */
class PromptVersionManager {
  constructor() {
    this.versions = new Map() // skill -> [{version, prompt, avg_rating, created_at}]
  }

  /**
   * 注册新版本
   */
  registerVersion(skillName, prompt, rating = null) {
    if (!this.versions.has(skillName)) {
      this.versions.set(skillName, [])
    }

    const versions = this.versions.get(skillName)
    const version = versions.length + 1

    versions.push({
      version,
      prompt: prompt.substring(0, 100) + '...', // 存摘要
      full_prompt: prompt,
      avg_rating: rating,
      created_at: new Date().toISOString(),
      status: rating ? 'stable' : 'testing'
    })

    return { skillName, version }
  }

  /**
   * 获取当前稳定版本
   */
  getCurrentVersion(skillName) {
    const versions = this.versions.get(skillName)
    if (!versions || versions.length === 0) return null
    
    return versions.find(v => v.status === 'stable') || versions[versions.length - 1]
  }

  /**
   * 获取版本历史
   */
  getVersionHistory(skillName) {
    return this.versions.get(skillName) || []
  }
}

module.exports = { PromptOptimizer, PromptVersionManager };