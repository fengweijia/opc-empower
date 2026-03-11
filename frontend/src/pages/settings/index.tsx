/**
 * 设置页面 - 飞书和大模型API配置
 * 用户自行配置ID和Key，数据存在用户自己的飞书中
 */
import { View, Text, Input } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import useAppStore from '../../store'
import apiService from '../../services/api'
import './index.scss'

// 配置项
const configSections = [
  {
    id: 'lark',
    title: '飞书配置',
    icon: '📊',
    desc: '连接你的飞书多维表格，数据存在你手里',
    fields: [
      { key: 'appId', label: 'App ID', placeholder: '飞书应用App ID', type: 'text' },
      { key: 'appSecret', label: 'App Secret', placeholder: '飞书应用App Secret', type: 'password' },
      { key: 'appToken', label: '多维表格App Token', placeholder: 'bitable app token（以 b... 开头）', type: 'text' },
      { key: 'tableId', label: '多维表格ID', placeholder: '数据存储的表格ID', type: 'text' }
    ]
  },
  {
    id: 'ai',
    title: 'AI大模型配置',
    icon: '🤖',
    desc: '使用你自己的API Key，成本完全可控',
    fields: [
      { key: 'provider', label: '模型提供商', placeholder: 'openai / claude / deepseek / siliconflow / ark', type: 'text' },
      { key: 'apiKey', label: 'API Key', placeholder: '你的API密钥', type: 'password' },
      { key: 'apiEndpoint', label: 'API地址（可选）', placeholder: '例如 https://api.deepseek.com/v1', type: 'text' },
      { key: 'model', label: '模型ID', placeholder: '例如 deepseek-chat / deepseek-ai/DeepSeek-V2', type: 'text' }
    ]
  },
  {
    id: 'user',
    title: '个人信息',
    icon: '👤',
    desc: '完善你的赚钱档案，AI更懂你',
    fields: [
      { key: 'product', label: '你卖什么', placeholder: '产品或服务名称', type: 'text' },
      { key: 'targetAudience', label: '目标客户', placeholder: '你的客户是谁', type: 'text' }
    ]
  }
]

export default function SettingsPage() {
  const { config, updateConfig, saveConfig, setLoading, setError } = useAppStore()
  const [testing, setTesting] = useState({ lark: false, ai: false })

  const getProviderDefaults = (provider: string) => {
    const p = (provider || '').trim().toLowerCase()
    if (p === 'deepseek') return { apiEndpoint: 'https://api.deepseek.com/v1', model: 'deepseek-chat' }
    if (p === 'siliconflow') return { apiEndpoint: 'https://api.siliconflow.cn/v1', model: 'deepseek-ai/DeepSeek-V2' }
    if (p === 'claude') return { apiEndpoint: 'https://api.anthropic.com', model: 'claude-3-opus-20240229' }
    if (p === 'ark' || p === 'volcengine' || p === 'volc') return { apiEndpoint: '', model: '' }
    return { apiEndpoint: 'https://api.openai.com/v1', model: 'gpt-4' }
  }

  // 输入变化
  const handleInputChange = (section, key, value) => {
    if (section === 'ai' && key === 'provider') {
      const nextProvider = value
      const prevProvider = config.ai.provider
      updateConfig(section, key, nextProvider)

      const prevDefaults = getProviderDefaults(prevProvider)
      const nextDefaults = getProviderDefaults(nextProvider)

      const currModel = config.ai.model
      const shouldUpdateModel =
        !currModel || currModel === prevDefaults.model || currModel === 'gpt-4'

      if (shouldUpdateModel) {
        updateConfig('ai', 'model', nextDefaults.model)
      }

      if (!config.ai.apiEndpoint) {
        updateConfig('ai', 'apiEndpoint', nextDefaults.apiEndpoint)
      }

      return
    }
    updateConfig(section, key, value)
  }

  // 测试飞书连接
  const testLarkConnection = async () => {
    if (!config.lark.appId || !config.lark.appSecret || !config.lark.appToken || !config.lark.tableId) {
      Taro.showToast({ title: '请填写飞书配置', icon: 'error' })
      return
    }

    setTesting(prev => ({ ...prev, lark: true }))
    setLoading(true)
    Taro.showLoading({ title: '测试中...' })
    
    try {
      await apiService.testLarkConnection(config.lark)
      Taro.showToast({ title: '连接成功', icon: 'success' })
    } catch (error) {
      console.error('飞书连接测试失败:', error)
      setError(error.message)
      Taro.showToast({ 
        title: error.message || '连接失败', 
        icon: 'error' 
      })
    } finally {
      setTesting(prev => ({ ...prev, lark: false }))
      setLoading(false)
      Taro.hideLoading()
    }
  }

  // 测试AI API
  const testAIConnection = async () => {
    if (!config.ai.apiKey) {
      Taro.showToast({ title: '请填写API Key', icon: 'error' })
      return
    }

    setTesting(prev => ({ ...prev, ai: true }))
    setLoading(true)
    Taro.showLoading({ title: '测试中...' })
    
    try {
      await apiService.testAIConnection(config.ai)
      Taro.showToast({ title: 'API可用', icon: 'success' })
    } catch (error) {
      console.error('AI API测试失败:', error)
      setError(error.message)
      Taro.showToast({ 
        title: error.message || '测试失败', 
        icon: 'error' 
      })
    } finally {
      setTesting(prev => ({ ...prev, ai: false }))
      setLoading(false)
      Taro.hideLoading()
    }
  }

  // 保存配置
  const saveConfigs = async () => {
    try {
      await saveConfig()
      Taro.showToast({ title: '配置已保存', icon: 'success' })
    } catch (error) {
      console.error('保存配置失败:', error)
      setError(error.message)
      Taro.showToast({ title: '保存失败', icon: 'error' })
    }
  }

  return (
    <View className="settings-page">
      <View className="page-header">
        <Text className="page-title">设置</Text>
      </View>

      <View className="settings-content">
        {configSections.map((section) => (
          <View key={section.id} className="config-section">
            <View className="section-header">
              <Text className="section-icon">{section.icon}</Text>
              <View className="section-info">
                <Text className="section-title">{section.title}</Text>
                <Text className="section-desc">{section.desc}</Text>
              </View>
            </View>

            <View className="section-fields">
              {section.fields.map((field) => (
                <View key={field.key} className="field-item">
                  <Text className="field-label">{field.label}</Text>
                  <Input
                    className="field-input"
                    type={field.type === 'password' ? 'text' : 'text'}
                    password={field.type === 'password'}
                    placeholder={field.placeholder}
                    value={config[section.id]?.[field.key] || ''}
                    onInput={(e) => handleInputChange(section.id, field.key, e.detail.value)}
                  />
                </View>
              ))}
            </View>

            <View className="section-actions">
              {section.id === 'lark' && (
                <View 
                  className={`btn btn-secondary ${testing.lark ? 'btn-disabled' : ''}`}
                  onClick={testLarkConnection}
                >
                  <Text>{testing.lark ? '测试中...' : '测试连接'}</Text>
                </View>
              )}
              {section.id === 'ai' && (
                <View 
                  className={`btn btn-secondary ${testing.ai ? 'btn-disabled' : ''}`}
                  onClick={testAIConnection}
                >
                  <Text>{testing.ai ? '测试中...' : '测试API'}</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>

      <View className="save-section">
        <View className="btn btn-primary w-full" onClick={saveConfigs}>
          保存配置
        </View>
        <Text className="save-tip">
          提示：配置保存在你的设备本地，不会上传到服务器
        </Text>
      </View>

      <View className="footer-info">
        <Text className="version">OPC赚钱军师 v1.0.0</Text>
        <Text className="copyright">让每个OPC都能用AI赚到钱</Text>
      </View>
    </View>
  )
}
