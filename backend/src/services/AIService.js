/**
 * AI大模型服务封装
 * 支持多种模型提供商：OpenAI、Claude、DeepSeek等
 */

class AIService {
  constructor() {
    this.providers = {
      openai: this.callOpenAI.bind(this),
      claude: this.callClaude.bind(this),
      deepseek: this.callDeepSeek.bind(this),
      siliconflow: this.callSiliconFlow.bind(this),
      ark: this.callArk.bind(this),
      volcengine: this.callArk.bind(this)
    }
  }

  buildChatCompletionsUrl(apiEndpoint, fallbackBase) {
    const raw = (apiEndpoint || fallbackBase || '').trim()
    if (!raw) return ''
    const withoutTrailingSlash = raw.endsWith('/') ? raw.slice(0, -1) : raw
    if (withoutTrailingSlash.endsWith('/chat/completions')) return withoutTrailingSlash
    return `${withoutTrailingSlash}/chat/completions`
  }

  // 主入口：生成内容
  async generate(prompt, config) {
    if (!config) {
      throw new Error('AI配置不能为空')
    }
    
    const provider = config.provider || 'openai'
    const handler = this.providers[provider]

    if (!handler) {
      throw new Error(`不支持的模型提供商: ${provider}`)
    }

    try {
      const result = await handler({
        prompt,
        model: config.model,
        apiKey: config.apiKey,
        apiEndpoint: config.apiEndpoint,
        temperature: config.temperature || 0.7,
        maxTokens: config.maxTokens || 2000
      })

      return result
    } catch (error) {
      console.error('AI生成失败:', error)
      // 如果是网络错误，提供更友好的错误信息
      if (error.code === 'ETIMEDOUT' || error.message.includes('fetch failed')) {
        throw new Error(`AI服务连接超时，请检查网络连接或API端点配置`)
      }
      throw error
    }
  }

  // OpenAI API调用
  async callOpenAI(params) {
    const { prompt, model, apiKey, apiEndpoint, temperature, maxTokens } = params
    
    // 使用用户提供的API Key，不需要代理
    const url = this.buildChatCompletionsUrl(apiEndpoint, 'https://api.openai.com/v1')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model || 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens
      })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`OpenAI API错误: ${error}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }

  // Claude API调用
  async callClaude(params) {
    const { prompt, model, apiKey, apiEndpoint, temperature, maxTokens } = params
    
    const base = (apiEndpoint || 'https://api.anthropic.com').trim().replace(/\/$/, '')
    const response = await fetch(`${base}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: model || 'claude-3-opus-20240229',
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens
      })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Claude API错误: ${error}`)
    }

    const data = await response.json()
    return data.content[0].text
  }

  // DeepSeek API调用
  async callDeepSeek(params) {
    const { prompt, model, apiKey, apiEndpoint, temperature, maxTokens } = params
    
    const url = this.buildChatCompletionsUrl(apiEndpoint, 'https://api.deepseek.com/v1')
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: model || 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens
      })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`DeepSeek API错误: ${error}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }

  // SiliconFlow API调用（国内可用）
  async callSiliconFlow(params) {
    const { prompt, model, apiKey, apiEndpoint, temperature, maxTokens } = params
    
    const url = this.buildChatCompletionsUrl(apiEndpoint, 'https://api.siliconflow.cn/v1')
    const selectedModel = model || 'deepseek-ai/DeepSeek-V2'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: selectedModel,
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens
      })
    })

    if (!response.ok) {
      const error = await response.text()
      if (error.includes('Model does not exist')) {
        throw new Error(`SiliconFlow 模型不存在，请在设置中填写正确的模型ID。当前：${selectedModel}`)
      }
      throw new Error(`SiliconFlow API错误: ${error}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }

  async callArk(params) {
    const { prompt, model, apiKey, apiEndpoint, temperature, maxTokens } = params
    const url = this.buildChatCompletionsUrl(apiEndpoint, '')
    if (!url) {
      throw new Error('火山方舟需要配置 API地址（例如 https://ark.xxx/api/v3 ）')
    }
    if (!model) {
      throw new Error('火山方舟需要填写模型ID')
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [{ role: 'user', content: prompt }],
        temperature,
        max_tokens: maxTokens
      })
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`火山方舟 API错误: ${error}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }
}

// 导出
module.exports = { AIService }
