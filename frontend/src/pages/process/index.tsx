/**
 * 赚钱流程页面
 * 设计成交漏斗、发售脚本等自动化流程
 * 2026-03-11: 小白优化 - 对接后端Agent 3 API
 */
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import { LoadingSkeleton, ErrorState, EmptyState } from '../../components/StateFeedback'
import apiService from '../../services/api'
import useAppStore from '../../store'
import './index.scss'

// 流程类型
const processTypes = [
  { id: 'funnel_design', name: '成交漏斗', icon: '🔄', desc: '设计自动成交路径' },
  { id: 'launch_script', name: '7天发售加速器', icon: '📜', desc: '7天完整发售节奏' },
  { id: 'automation', name: '自动化流程', icon: '⚙️', desc: '让机器帮你赚钱' },
  { id: 'referral', name: '转介绍系统', icon: '🤝', desc: '让客户帮你拉客户' }
]

export default function ProcessPage() {
  const [selectedProcess, setSelectedProcess] = useState<string>('')
  const [processResult, setProcessResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [activeDay, setActiveDay] = useState(0) // 用于7天发售的横向Tab

  const { config, addToHistory } = useAppStore()

  // 选择流程类型 - 调用后端Agent 3 API
  const selectProcess = async (processId: string) => {
    setSelectedProcess(processId)
    setIsLoading(true)
    setErrorMsg('')
    setActiveDay(0)
    
    try {
      if (!config.ai.apiKey) {
        throw new Error('请先在设置中配置AI API Key')
      }
      if (!config.user.product || !config.user.targetAudience) {
        throw new Error('请先在设置中填写“我要卖的产品/服务”和“目标客户”')
      }

      const result = await apiService.executeAgent({
        agentType: 'process',
        skillType: processId,
        config: {
          aiConfig: {
            provider: config.ai.provider,
            apiKey: config.ai.apiKey,
            apiEndpoint: config.ai.apiEndpoint,
            model: config.ai.model
          },
          larkConfig: config.lark.appId ? config.lark : null
        },
        userParams: {
          userId: config.user.userId,
          product: config.user.product,
          targetAudience: config.user.targetAudience,
          price: '99',
          channel: '自媒体'
        }
      })
      
      if (!result.success) {
         throw new Error(result.message || '生成失败')
      }

      const payload = result.data
      setProcessResult({ skillType: processId, data: payload })

      addToHistory({
        id: `gen_${Date.now()}`,
        agentType: 'process',
        skillType: processId,
        inputParams: {
          product: config.user.product,
          targetAudience: config.user.targetAudience,
          price: '99',
          channel: '自媒体'
        },
        outputContent: result,
        generatedAt: new Date().toISOString(),
        strategyTags: ['成交流程', '发售']
      })
    } catch (error: any) {
      console.error('Agent 3 API调用失败:', error)
      setErrorMsg(error.message || '生成失败，请重试')
    } finally {
      setIsLoading(false)
    }
  }

  // 渲染7天发售界面
  const renderLaunchScript = (data: any) => {
    if (!data || !data.schedule || !Array.isArray(data.schedule)) {
       return <Text className="fallback-text">{typeof data === 'string' ? data : JSON.stringify(data)}</Text>
    }
    
    const schedule = data.schedule
    if (schedule.length === 0) return null

    const currentDayData = schedule[activeDay] || schedule[0]

    return (
      <View className="launch-container">
         <ScrollView scrollX className="days-tab">
            <View className="days-tab-inner">
               {schedule.map((d: any, idx: number) => (
                 <View 
                   key={idx} 
                   className={`day-item ${activeDay === idx ? 'active' : ''}`}
                   onClick={() => setActiveDay(idx)}
                 >
                   <Text className="day-name">Day {d.day}</Text>
                   <Text className="day-theme">{d.theme}</Text>
                 </View>
               ))}
            </View>
         </ScrollView>

         <View className="phone-preview">
            <View className="phone-header">
               <Text>发售内容预览</Text>
            </View>
            <ScrollView scrollY className="phone-content">
               {currentDayData.content?.Moments && currentDayData.content.Moments.length > 0 && (
                 <View className="content-block">
                    <Text className="block-title">朋友圈素材</Text>
                    {currentDayData.content.Moments.map((m: string, i: number) => (
                       <View key={i} className="moment-card">
                         <Text>{m}</Text>
                         <View className="action-row">
                            <Text className="copy-btn" onClick={() => Taro.setClipboardData({data: m})}>[一键复制]</Text>
                         </View>
                       </View>
                    ))}
                 </View>
               )}
               
               {currentDayData.content?.Community && (
                 <View className="content-block">
                    <Text className="block-title">社群SOP</Text>
                    <View className="chat-bubble">
                       <Text>{currentDayData.content.Community}</Text>
                       <View className="action-row">
                          <Text className="copy-btn" onClick={() => Taro.setClipboardData({data: currentDayData.content.Community})}>[一键复制]</Text>
                       </View>
                    </View>
                 </View>
               )}
            </ScrollView>
            <View className="phone-footer">
               <Button className="done-btn">标记本阶段完成</Button>
            </View>
         </View>
      </View>
    )
  }

  const renderContent = () => {
     if (!processResult) return null;
     if (processResult.skillType === 'launch_script') {
        return renderLaunchScript(processResult.data)
     }
     // 其他类型暂用兜底文本展示
     return (
       <View className="result-card">
          <Text className="result-content fallback-text">
             {typeof processResult.data === 'string' ? processResult.data : JSON.stringify(processResult.data, null, 2)}
          </Text>
       </View>
     )
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
              {isLoading ? (
                <LoadingSkeleton messages={['加载发售模板...', '定制朋友圈文案...', '生成社群SOP...']} />
              ) : errorMsg ? (
                <ErrorState message={errorMsg} onRetry={() => selectProcess(selectedProcess)} />
              ) : !processResult ? (
                <EmptyState onAction={() => selectProcess(selectedProcess)} />
              ) : (
                renderContent()
              )}
              
              {!isLoading && (
                <View className="back-section">
                  <View 
                    className="btn btn-secondary"
                    onClick={() => setSelectedProcess('')}
                  >
                    返回选择
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  )
}
