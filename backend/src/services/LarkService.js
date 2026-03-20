/**
 * 飞书多维表格服务
 * 用户数据存储在用户自己的飞书中
 */

class LarkService {
  constructor(config) {
    this.appId = config.appId           // 用于获取访问令牌
    this.appSecret = config.appSecret   // 用于获取访问令牌
    this.appToken = config.appToken     // 多维表格的应用令牌
    this.tableId = config.tableId       // 表格ID
    this.accessToken = null
    this.tokenExpireTime = 0
  }

  // 获取访问令牌
  async getAccessToken() {
    // 检查是否已缓存token
    if (this.accessToken && Date.now() < this.tokenExpireTime) {
      return this.accessToken
    }

    const response = await fetch('https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        app_id: this.appId,
        app_secret: this.appSecret
      })
    })

    const data = await response.json()

    if (data.code !== 0) {
      // 提供更友好的错误信息
      let errorMsg = `飞书获取token失败: ${data.msg}`
      if (data.msg === 'invalid param') {
        errorMsg = '飞书App ID或App Secret配置错误，请检查配置'
      } else if (data.msg.includes('app_id')) {
        errorMsg = '飞书App ID格式错误'
      } else if (data.msg.includes('app_secret')) {
        errorMsg = '飞书App Secret格式错误'
      }
      throw new Error(errorMsg)
    }

    this.accessToken = data.tenant_access_token
    // 提前5分钟过期
    this.tokenExpireTime = Date.now() + (data.expire - 5) * 1000

    return this.accessToken
  }

  // 创建记录
  async createRecord(fields) {
    const token = await this.getAccessToken()

    const response = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.appToken}/tables/${this.tableId}/records`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ fields })
      }
    )

    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(`飞书创建记录失败: ${data.msg}`)
    }

    return data.data
  }

  // 查询记录
  async queryRecords(filter, pageSize = 20, pageToken) {
    const token = await this.getAccessToken()

    let url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.appToken}/tables/${this.tableId}/records?page_size=${pageSize}`
    
    if (pageToken) {
      url += `&page_token=${pageToken}`
    }

    if (filter) {
      url += `&filter=${encodeURIComponent(filter)}`
    }

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(`飞书查询记录失败: ${data.msg}`)
    }

    return data.data
  }

  // 更新记录
  async updateRecord(recordId, fields) {
    const token = await this.getAccessToken()

    const response = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.appToken}/tables/${this.tableId}/records/${recordId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ fields })
      }
    )

    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(`飞书更新记录失败: ${data.msg}`)
    }

    return data.data
  }

  // 删除记录
  async deleteRecord(recordId) {
    const token = await this.getAccessToken()

    const response = await fetch(
      `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.appToken}/tables/${this.tableId}/records/${recordId}`,
      {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )

    const data = await response.json()

    if (data.code !== 0) {
      throw new Error(`飞书删除记录失败: ${data.msg}`)
    }

    return true
  }

  // 保存生成记录（便捷方法）
  async saveGenerationRecord(record) {
    // 合并输入参数和输出内容到生成内容字段
    const fullContent = {
      inputParams: record.inputParams,
      outputContent: record.outputContent,
      generatedAt: record.generatedAt || new Date().toISOString()
    }
    
    // 支持多类型记录 (playbook/prompt/history/feedback)
    const recordType = record.recordType || 'history'
    
    // 为了防止字段长度超限，将内容做安全截断或转换为字符串
    const contentStr = JSON.stringify(fullContent)
    const safeContent = contentStr.length > 50000 ? contentStr.substring(0, 50000) + '...(truncated)' : contentStr

    const fields = {
      'OPC赚钱军师数据存储': record.recordId || `gen_${Date.now()}`, // 主键字段
      '记录类型': recordType,
      '用户ID': record.userId,
      'Agent类型': record.agentType,
      'Skill类型': record.skillType,
      '生成内容': safeContent,
      '策略标签': record.strategyTags || [],
      'Prompt版本': record.promptVersion || 'default'
    }

    return await this.createRecord(fields)
  }

  // 针对 prompt/playbook 等配置型数据的缓存机制
  async getConfigRecord(type, skillType = null) {
     // TODO: 可以在类内部加一个基于时间的 memory cache
     let filterStr = `Filter(字段"记录类型"="${type}")`
     if (skillType) {
         filterStr = `Filter(AND(字段"记录类型"="${type}", 字段"Skill类型"="${skillType}"))`
     }
     const res = await this.queryRecords(filterStr, 1)
     if (res && res.items && res.items.length > 0) {
         return res.items[0]
     }
     return null
  }
}

module.exports = { LarkService }