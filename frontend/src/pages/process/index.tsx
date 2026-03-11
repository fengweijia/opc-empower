/**
 * 赚钱流程页面
 * 设计成交漏斗、发售脚本等自动化流程
 * 2026-03-11: 小白优化 - 对接后端Agent 3 API
 */
import { View, Text, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import apiService from '../../services/api'
import './index.scss'

// 获取用户配置
const getUserConfig = () => {
  try {
    return {
      product: Taro.getStorageSync('opc_product') || '我的产品',
      targetAudience: Taro.getStorageSync('opc_target_audience') || '目标客户',
      price: Taro.getStorageSync('opc_price') || '99',
      aiConfig: {
        provider: Taro.getStorageSync('opc_ai_provider'),
        apiKey: Taro.getStorageSync('opc_ai_api_key'),
        model: Taro.getStorageSync('opc_ai_model')
      }
    }
  } catch (e) {
    return { product: '我的产品', targetAudience: '目标客户', price: '99', aiConfig: {} }
  }
}

// 流程类型
const processTypes = [
  { id: 'funnel_design', name: '成交漏斗', icon: '🔄', desc: '设计自动成交路径' },
  { id: 'launch_script', name: '发售脚本', icon: '📜', desc: '7天完整发售节奏' },
  { id: 'automation', name: '自动化流程', icon: '⚙️', desc: '让机器帮你赚钱' },
  { id: 'referral', name: '转介绍系统', icon: '🤝', desc: '让客户帮你拉客户' }
]

export default function ProcessPage() {
  const [selectedProcess, setSelectedProcess] = useState('')
  const [processResult, setProcessResult] = useState(null)

  // 选择流程类型 - 调用后端Agent 3 API
  const selectProcess = async (processId) => {
    setSelectedProcess(processId)
    Taro.showLoading({ title: 'AI设计中...' })
    
    try {
      const userConfig = getUserConfig()
      
      // 调用后端Agent 3 API
      const result = await apiService.executeAgent({
        agentType: 'process',
        skillType: processId,
        params: {
          product: userConfig.product,
          targetAudience: userConfig.targetAudience,
          price: userConfig.price,
          channel: '自媒体',
          ...userConfig.aiConfig
        }
      })
      
      // 格式化返回数据
      const formattedResult = formatAgent3Result(processId, result)
      setProcessResult(formattedResult)
    } catch (error) {
      console.error('Agent 3 API调用失败:', error)
      // 回退到本地mock数据
      setProcessResult({
        title: processId === 'funnel_design' ? '成交漏斗设计' : 
               processId === 'launch_script' ? '7天发售脚本' :
               processId === 'automation' ? '自动化流程' : '转介绍系统',
        content: 'AI正在为你设计赚钱流程...\n\n（当前使用模拟数据，配置AI API后可获得完整方案）',
        steps: ['配置AI API获取完整方案']
      })
    }
    
    Taro.hideLoading()
  }

  // 格式化Agent 3返回结果
  const formatAgent3Result = (skillType, data) => {
    if (skillType === 'funnel_design') {
      const layers = data.layers || []
      return {
        title: '成交漏斗设计',
        content: layers.map(l => `**${l.name}**\n${l.description}\n脚本：${l.script}`).join('\n\n'),
        steps: layers.flatMap(l => l.tactics?.map(t => t.name) || [])
      }
    }
    if (skillType === 'launch_script') {
      const schedule = data.schedule || []
      return {
        title: '7天发售脚本',
        content: schedule.map(d => `**Day${d.day} ${d.theme}**\n${d.content?.Moments?.join('\n') || ''}`).join('\n\n'),
        steps: schedule.map(d => `Day${d.day}: ${d.theme}`)
      }
    }
    if (skillType === 'automation') {
      const content = data.content || []
      return {
        title: '自动化流程',
        content: content.map(c => `**${c.name}**\n${c.template || ''}`).join('\n\n'),
        steps: content.map(c => c.name)
      }
    }
    if (skillType === 'referral') {
      const mechanics = data.mechanics || []
      return {
        title: '转介绍系统',
        content: mechanics.map(m => `**${m.name}**\n${m.description}`).join('\n\n'),
        steps: mechanics.map(m => m.name)
      }
    }
    return { title: '流程设计', content: JSON.stringify(data, null, 2), steps: [] }
  }

  return (
    <View className="process-page">
      <View className="page-header">
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          <Text>← 返回</Text>
        </View>
        <Text className="page-title">赚钱流程</Text>
        <View className="placeholder" />
      </View>

      <View className="page-content">
        {!selectedProcess ? (
          <View className="process-selection">
            <Text className="section-title">选择流程类型</Text>
            <View className="process-grid">
              {processTypes.map((process) => (
                <View 
                  key={process.id}
                  className="process-card"
                  onClick={() => selectProcess(process.id)}
                >
                  <Text className="process-icon">{process.icon}</Text>
                  <Text className="process-name">{process.name}</Text>
                  <Text className="process-desc">{process.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View className="process-result">
            <ScrollView scrollY className="result-scroll">
              <View className="result-card">
                <Text className="result-title">{processResult?.title}</Text>
                <Text className="result-content">
                  {processResult?.content}
                </Text>
                
                {processResult?.steps && processResult.steps.length > 0 && (
                  <View className="steps-section">
                    <Text className="steps-title">执行步骤：</Text>
                    {processResult.steps.map((step, index) => (
                      <View key={index} className="step-item">
                        <Text className="step-number">{index + 1}</Text>
                        <Text className="step-text">{step}</Text>
                      </View>
                    ))}
                  </View>
                )}
                
                <View className="result-actions">
                  <View className="btn btn-primary">生成详细方案</View>
                  <View className="btn btn-secondary">保存到飞书</View>
                </View>
              </View>
              
              <View className="back-section">
                <View 
                  className="btn btn-secondary"
                  onClick={() => setSelectedProcess('')}
                >
                  返回选择
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  )
}