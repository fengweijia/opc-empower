/**
 * OPC赚钱军师 - 用户画像个性化引擎
 * 基于用户历史数据生成个性化输出
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class UserProfileEngine {
  constructor() {
    // 用户画像数据
    this.profiles = new Map()
  }

  /**
   * 初始化用户画像
   */
  initProfile(userId) {
    this.profiles.set(userId, {
      user_id: userId,
      // 风格偏好
      style_preference: {
        tone: 'balanced', // 口语/书面/平衡
        length: 'medium', // short/medium/long
        emoji: true,
        story_style: true
      },
      // 偏好 Skills
      preferred_skills: [],
      // 高评分内容特征
      high_rating_patterns: [],
      // 常用追问/修改
      common_modifications: [],
      // 效果最好的内容
      best_performing: null,
      // 统计数据
      stats: {
        total_generated: 0,
        total_used: 0,
        avg_rating: 0,
        top_skill: null
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
  }

  /**
   * 从历史数据学习用户偏好
   */
  learnFromHistory(userId, historyRecords) {
    const profile = this.profiles.get(userId) || this.initProfile(userId)
    
    // 分析高评分内容
    const highRated = historyRecords.filter(r => r.rating >= 4)
    if (highRated.length > 0) {
      profile.high_rating_patterns = this.analyzePatterns(highRated)
      profile.best_performing = this.findBestPerforming(highRated)
    }

    // 分析常用修改
    const modifications = historyRecords
      .filter(r => r.follow_up_count > 0)
      .flatMap(r => r.modifications)
    profile.common_modifications = this.countFrequency(modifications)

    // 统计偏好 Skills
    const skillCounts = {}
    historyRecords.forEach(r => {
      skillCounts[r.skill_type] = (skillCounts[r.skill_type] || 0) + 1
    })
    profile.preferred_skills = Object.entries(skillCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([skill]) => skill)

    // 更新统计
    profile.stats = {
      total_generated: historyRecords.length,
      total_used: historyRecords.filter(r => r.used).length,
      avg_rating: this.calculateAvgRating(historyRecords),
      top_skill: profile.preferred_skills[0] || null
    }

    profile.updated_at = new Date().toISOString()
    this.profiles.set(userId, profile)

    return profile
  }

  /**
   * 生成个性化Prompt
   */
  generatePersonalizedPrompt(userId, basePrompt, skillType) {
    const profile = this.profiles.get(userId)
    if (!profile) return basePrompt

    // 构建个性化指令
    const instructions = []

    // 风格偏好
    if (profile.style_preference.tone === 'oral') {
      instructions.push('使用更口语化的表达，像跟朋友聊天')
    } else if (profile.style_preference.tone === 'formal') {
      instructions.push('使用正式专业的表达')
    }

    if (profile.style_preference.length === 'short') {
      instructions.push('文案简短有力，控制在100字以内')
    } else if (profile.style_preference.length === 'long') {
      instructions.push('内容充分展开，详细说明')
    }

    // 最佳效果特征
    if (profile.best_performing) {
      instructions.push(`参考最佳效果内容的风格：${profile.best_performing}`)
    }

    // 附加到prompt
    if (instructions.length > 0) {
      const personalized = basePrompt + '\n\n【用户偏好】' + instructions.join('；') + '。'
      return personalized
    }

    return basePrompt
  }

  // 辅助方法
  analyzePatterns(records) {
    const patterns = {
      has_numbers: 0,
      has_story: 0,
      has_emoji: 0,
      short_length: 0,
      total: records.length
    }

    records.forEach(r => {
      const content = r.output?.content || ''
      if (/\d+/.test(content)) patterns.has_numbers++
      if (content.includes('我') || content.includes('之前')) patterns.has_story++
      if (content.includes('😀') || content.includes('😂')) patterns.has_emoji++
      if (content.length < 150) patterns.short_length++
    })

    return {
      numeric_rate: patterns.has_numbers / patterns.total,
      story_rate: patterns.has_story / patterns.total,
      emoji_rate: patterns.has_emoji / patterns.total,
      short_rate: patterns.short_length / patterns.total
    }
  }

  findBestPerforming(records) {
    // 找出效果最好的内容的特征描述
    const best = records.sort((a, b) => b.rating - a.rating)[0]
    if (!best) return null

    const features = []
    const content = best.output?.content || ''
    
    if (/\d+/.test(content)) features.push('有具体数字')
    if (content.length < 150) features.push('简洁')
    if (content.includes('\n')) features.push('分段清晰')

    return features.join('，')
  }

  countFrequency(items) {
    const freq = {}
    items.forEach(item => {
      freq[item] = (freq[item] || 0) + 1
    })
    return Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([item]) => item)
  }

  calculateAvgRating(records) {
    if (records.length === 0) return 0
    const sum = records.reduce((acc, r) => acc + (r.rating || 0), 0)
    return sum / records.length
  }

  /**
   * 获取用户画像
   */
  getProfile(userId) {
    return this.profiles.get(userId)
  }
}

module.exports = { UserProfileEngine };