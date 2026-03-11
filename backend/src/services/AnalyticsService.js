/**
 * OPC赚钱军师 - 行为追踪服务
 * 采集用户行为数据，为AI进化提供依据
 * 创建时间: 2026-03-10
 * 作者: 小白
 */

class AnalyticsService {
  constructor(larkService) {
    this.larkService = larkService
    this.eventBuffer = []
    this.flushInterval = 5000 // 5秒批量上报
  }

  /**
   * 事件类型定义
   */
  static EVENT_TYPES = {
    // 功能选择
    FEATURE_SELECT: 'feature_select',
    // 参数选择
    PARAM_SELECT: 'param_select',
    // 内容交互（复制、收藏、刷新）
    CONTENT_INTERACT: 'content_interact',
    // 追问
    FOLLOW_UP: 'follow_up',
    // 会话完成
    SESSION_COMPLETE: 'session_complete'
  }

  /**
   * 追踪功能选择事件
   */
  trackFeatureSelect(params) {
    return this.track(AnalyticsService.EVENT_TYPES.FEATURE_SELECT, {
      agent: params.agent,
      skill: params.skill,
      from_page: params.fromPage,
      timestamp: new Date().toISOString()
    })
  }

  /**
   * 追踪参数选择事件
   */
  trackParamSelect(params) {
    return this.track(AnalyticsService.EVENT_TYPES.PARAM_SELECT, {
      step: params.step,
      options_shown: params.optionsShown || [],
      user_choice: params.userChoice,
      time_spent: params.timeSpent || 0,
      is_changed: params.isChanged || false,
      timestamp: new Date().toISOString()
    })
  }

  /**
   * 追踪内容交互事件
   */
  trackContentInteract(params) {
    return this.track(AnalyticsService.EVENT_TYPES.CONTENT_INTERACT, {
      action: params.action, // copy/favorite/regenerate/edit/rate/share
      content_id: params.contentId,
      content_index: params.contentIndex,
      strategy_type: params.strategyType,
      read_time: params.readTime || 0,
      scroll_depth: params.scrollDepth || 0,
      timestamp: new Date().toISOString()
    })
  }

  /**
   * 追踪追问事件
   */
  trackFollowUp(params) {
    return this.track(AnalyticsService.EVENT_TYPES.FOLLOW_UP, {
      original_record: params.originalRecord,
      follow_up_type: params.followUpType, // 缩短/换风格/加案例等
      user_message: params.userMessage,
      new_version: params.newVersion || 1,
      timestamp: new Date().toISOString()
    })
  }

  /**
   * 追踪会话完成
   */
  trackSessionComplete(params) {
    return this.track(AnalyticsService.EVENT_TYPES.SESSION_COMPLETE, {
      session_id: params.sessionId,
      total_duration: params.totalDuration,
      steps_count: params.stepsCount,
      regenerate_count: params.regenerateCount || 0,
      final_action: params.finalAction, // copy/abandon/favorite
      satisfaction: params.satisfaction, // high/medium/low
      complete_path: params.completePath || [],
      timestamp: new Date().toISOString()
    })
  }

  /**
   * 核心追踪方法
   */
  track(eventType, data) {
    const event = {
      event_id: this.generateId(),
      event_type: eventType,
      user_id: data.user_id || 'default',
      data: data,
      created_at: new Date().toISOString()
    }

    // 缓存到缓冲区
    this.eventBuffer.push(event)

    // 达到10条或超时，自动上报
    if (this.eventBuffer.length >= 10) {
      this.flush()
    }

    return event
  }

  /**
   * 批量上报事件到飞书
   */
  async flush() {
    if (this.eventBuffer.length === 0) {
      return
    }

    const events = [...this.eventBuffer]
    this.eventBuffer = []

    try {
      // 保存到飞书
      const fields = {
        '事件数据': JSON.stringify(events),
        '事件数量': events.length,
        '时间范围': `${events[0].created_at} - ${events[events.length-1].created_at}`
      }
      
      console.log(`[Analytics] 批量上报 ${events.length} 条事件`)
      // 实际部署时需要解注释
      // await this.larkService.createRecord(fields)
      
      return { success: true, count: events.length }
    } catch (error) {
      console.error('[Analytics] 上报失败:', error)
      // 失败则放回缓冲区
      this.eventBuffer = [...events, ...this.eventBuffer]
      return { success: false, error: error.message }
    }
  }

  /**
   * 立即上报（用于页面卸载等场景）
   */
  async flushNow() {
    return this.flush()
  }

  /**
   * 简单事件统计（用于实时展示）
   */
  getQuickStats() {
    return {
      total_events: this.eventBuffer.length,
      by_type: this.eventBuffer.reduce((acc, e) => {
        acc[e.event_type] = (acc[e.event_type] || 0) + 1
        return acc
      }, {})
    }
  }

  /**
   * 生成事件ID
   */
  generateId() {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
}

module.exports = { AnalyticsService };