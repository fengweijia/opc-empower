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

  // 通用的 HTTP 请求重试与超时封装
  async fetchWithRetry(url, options, maxRetries = 3, timeoutMs = 60000) {
    let lastError = null;
    
    for (let i = 0; i < maxRetries; i++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
      
      try {
        const response = await fetch(url, {
          ...options,
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        // 429 Too Many Requests 退避重试
        if (response.status === 429) {
          const retryAfter = response.headers.get('retry-after') || 2;
          console.warn(`[AIService] 触发 429 频控，等待 ${retryAfter} 秒后重试 (第 ${i + 1}/${maxRetries} 次)`);
          await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
          continue;
        }

        // 5xx 服务端错误也重试
        if (response.status >= 500 && response.status < 600) {
           console.warn(`[AIService] 服务端错误 ${response.status}，准备重试 (第 ${i + 1}/${maxRetries} 次)`);
           await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1))); // 简单指数退避
           continue;
        }
        
        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        lastError = error;
        
        if (error.name === 'AbortError') {
          console.warn(`[AIService] 请求超时 (${timeoutMs}ms)，准备重试 (第 ${i + 1}/${maxRetries} 次)`);
        } else {
          console.warn(`[AIService] 网络错误: ${error.message}，准备重试 (第 ${i + 1}/${maxRetries} 次)`);
        }
        
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1)));
      }
    }
    
    if (lastError && lastError.name === 'AbortError') {
      throw new Error('AI服务生成超时，请稍后再试或精简输入内容。');
    }
    throw new Error(`AI服务请求失败，重试 ${maxRetries} 次后放弃。原因: ${lastError ? lastError.message : '未知'}`);
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
    const response = await this.fetchWithRetry(url, {
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
    const response = await this.fetchWithRetry(`${base}/v1/messages`, {
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
    const response = await this.fetchWithRetry(url, {
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
    const response = await this.fetchWithRetry(url, {
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

    const response = await this.fetchWithRetry(url, {
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
