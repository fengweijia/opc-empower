/**
 * API服务封装
 * 处理与Serverless后端的通信
 */

import Taro from '@tarojs/taro'

const API_BASE_URL = 'http://localhost:3000'

class APIService {
  baseUrl: string

  constructor() {
    this.baseUrl = API_BASE_URL
  }

  formatRequestError(error: any, url: string) {
    const raw = (error?.errMsg || error?.message || '').toString()
    if (raw.includes('url not in domain list')) {
      return new Error('请求域名不在合法域名列表中，请在开发者工具勾选“不校验合法域名…”或改用已配置的 HTTPS 域名')
    }
    if (raw.includes('ERR_CONNECTION_REFUSED') || raw.includes('ECONNREFUSED')) {
      return new Error(`无法连接后端服务：${url}。请确认后端已启动（backend/node test-server.js），或设置 opc_api_base_url 指向可访问的地址`)
    }
    if (raw.includes('timeout') || raw.includes('timed out')) {
      return new Error('请求超时，请检查网络或后端服务状态')
    }
    return new Error(raw || '请求失败，请检查网络与后端服务状态')
  }

  getBaseUrl() {
    try {
      const v = Taro.getStorageSync('opc_api_base_url')
      if (typeof v === 'string' && v.trim()) return v.trim()
    } catch (_) {}
    return this.baseUrl
  }

  // 通用请求方法
  async request(endpoint: string, data: any = {}) {
    try {
      const resolvedEndpoint = endpoint === '/api/main' ? '/' : endpoint
      const baseUrl = this.getBaseUrl()
      const url = `${baseUrl}${resolvedEndpoint}`

      const response = await Taro.request({
        url,
        method: 'POST',
        data,
        header: {
          'content-type': 'application/json'
        }
      })

      const result: any = response.data
      
      if (!result.success) {
        throw new Error(result.message || 'API请求失败')
      }

      return result.data
    } catch (error) {
      console.error('API请求错误:', error)
      throw this.formatRequestError(error, `${this.getBaseUrl()}${endpoint === '/api/main' ? '/' : endpoint}`)
    }
  }

  // 获取可用Agent列表
  async getAgents() {
    return this.request('/', {
      action: 'getAgents'
    })
  }

  // 执行Agent请求
  async executeAgent(params) {
    return this.request('/', {
      action: 'executeAgent',
      params
    })
  }

  // 测试飞书连接
  async testLarkConnection(config) {
    return this.request('/', {
      action: 'testLark',
      params: config
    })
  }

  // 测试AI API连接
  async testAIConnection(config) {
    return this.request('/', {
      action: 'testAI',
      params: config
    })
  }

  // 获取历史记录
  async getHistory(config, userId, pageSize = 20) {
    return this.request('/', {
      action: 'getHistory',
      params: {
        larkConfig: config,
        userId,
        pageSize
      }
    })
  }

  // 健康检查
  async healthCheck() {
    return this.request('/', {
      action: 'health'
    })
  }
}

// 创建单例
const apiService = new APIService()

export default apiService
