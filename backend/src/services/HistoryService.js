/**
 * OPC赚钱军师 - 历史记录服务
 * 用户生成内容的完整存档
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class HistoryService {
  constructor(larkService) {
    this.larkService = larkService
  }

  /**
   * 保存生成记录
   * @param {Object} record 记录数据
   */
  async saveRecord(record) {
    // 数据模型
    const fields = {
      '记录ID': record.record_id || this.generateId(),
      '用户ID': record.user_id || 'default',
      'Agent类型': record.agent_type,
      'Skill类型': record.skill_type,
      '输入参数': JSON.stringify(record.input_params || {}),
      '生成内容': JSON.stringify(record.output_content || {}),
      '策略标签': (record.strategy_tags || []).join(', '),
      '生成时间': record.generated_at || new Date().toISOString(),
      '用户评分': record.user_rating || null,
      '是否使用': record.used || false,
      '使用时间': record.used_at || null,
      '用户反馈': record.feedback || ''
    }

    try {
      const result = await this.larkService.createRecord(fields)
      return {
        success: true,
        record_id: record.record_id,
        saved_at: new Date().toISOString()
      }
    } catch (error) {
      console.error('保存历史记录失败:', error)
      return { success: false, error: error.message }
    }
  }

  /**
   * 获取用户历史记录
   * @param {string} userId 用户ID
   * @param {Object} options 查询选项
   */
  async getHistory(userId, options = {}) {
    try {
      // 使用飞书API查询记录
      const filterConditions = []
      
      if (userId) {
        filterConditions.push({
          field_name: '用户ID',
          operator: 'equal',
          value: userId
        })
      }

      if (options.agentType) {
        filterConditions.push({
          field_name: 'Agent类型',
          operator: 'equal',
          value: options.agentType
        })
      }

      // 简化处理：返回空列表（实际需要飞书表格支持过滤）
      return {
        success: true,
        records: [],
        total: 0,
        message: '需配置飞书表格字段后启用'
      }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  /**
   * 更新记录（评分、反馈等）
   * @param {string} recordId 记录ID
   * @param {Object} updates 更新数据
   */
  async updateRecord(recordId, updates) {
    const fields = {}
    
    if (updates.user_rating !== undefined) {
      fields['用户评分'] = updates.user_rating
    }
    if (updates.used !== undefined) {
      fields['是否使用'] = updates.used
      fields['使用时间'] = updates.used ? new Date().toISOString() : null
    }
    if (updates.feedback !== undefined) {
      fields['用户反馈'] = updates.feedback
    }

    try {
      await this.larkService.updateRecord(recordId, fields)
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  /**
   * 评分功能
   * @param {string} recordId 
   * @param {number} rating 1-4星
   */
  async rateRecord(recordId, rating) {
    return this.updateRecord(recordId, { user_rating: rating })
  }

  /**
   * 标记使用
   * @param {string} recordId 
   */
  async markAsUsed(recordId) {
    return this.updateRecord(recordId, { used: true })
  }

  /**
   * 提交反馈
   * @param {string} recordId 
   * @param {string} feedback 
   */
  async submitFeedback(recordId, feedback) {
    return this.updateRecord(recordId, { feedback })
  }

  /**
   * 生成记录ID
   */
  generateId() {
    return `rec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}

module.exports = { HistoryService };