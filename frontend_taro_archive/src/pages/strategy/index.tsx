/**
 * 赚钱策略页面
 * 提供赚钱定位、定价、获客等策略建议
 */
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import { LoadingSkeleton, ErrorState, EmptyState } from '../../components/StateFeedback'
import apiService from '../../services/api'
import useAppStore from '../../store'
import './index.scss'

// 策略类型
const strategyTypes = [
  { id: 'positioning', name: '定位诊断', icon: '🎯', desc: '雷达图与30天启动路径' },
  { id: 'pricing', name: '定价策略', icon: '💰', desc: '让客户觉得超值' },
  { id: 'channel', name: '获客渠道', icon: '📢', desc: '找到最便宜的流量' },
  { id: 'competitor', name: '竞品分析', icon: '🔍', desc: '找到你的蓝海机会' }
]

export default function StrategyPage() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>('')
  const [strategyResult, setStrategyResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const { config, addToHistory } = useAppStore()

  // 调用真实后端接口获取策略
  const selectStrategy = async (strategyId: string) => {
    setSelectedStrategy(strategyId)
    setIsLoading(true)
    setError('')
    
    try {
      if (!config.ai.apiKey) {
        throw new Error('请先在设置中配置AI API Key')
      }
      if (!config.user.product || !config.user.targetAudience) {
        throw new Error('请先在设置中填写“我要卖的产品/服务”和“目标客户”')
      }

      const res = await apiService.executeAgent({
         agentType: 'strategy',
         skillType: strategyId,
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
      if (res.success) {
         setStrategyResult(res.data)
         addToHistory({
           id: `gen_${Date.now()}`,
           agentType: 'strategy',
           skillType: strategyId,
           inputParams: {
             product: config.user.product,
             targetAudience: config.user.targetAudience,
             price: '99',
             channel: '自媒体'
           },
           outputContent: res,
           generatedAt: new Date().toISOString(),
           strategyTags: ['定位诊断', '赚钱路径']
         })
      } else {
         setError(res.message || '生成失败，请重试')
      }
    } catch (err: any) {
      setError(err.message || '网络或接口错误')
    } finally {
      setIsLoading(false)
    }
  }

  // 渲染雷达图占位
  const renderRadar = (analysis: any) => {
    if (!analysis) return null;
    return (
      <View className="radar-container">
        <Text className="radar-title">核心竞争力诊断雷达</Text>
        <View className="radar-mock">
           <Text>市场匹配度: {analysis.market_match || 0}/5</Text>
           <Text>可行性: {analysis.feasibility || 0}/5</Text>
           <Text>优势: {(analysis.core_competence || []).join(', ')}</Text>
        </View>
      </View>
    )
  }

  // 渲染30天路径
  const renderRoadmap = (roadmap: any[]) => {
    if (!roadmap || !roadmap.length) return null;
    return (
      <View className="roadmap-container">
        <Text className="roadmap-title">30天赚钱路径</Text>
        <View className="timeline">
          {roadmap.map((step, idx) => (
             <View className="timeline-item" key={idx}>
                <View className="timeline-dot" />
                <View className="timeline-content">
                   <Text className="timeline-week">{step.week} ({step.phase})</Text>
                   <View className="timeline-tasks">
                     {(step.tasks || []).map((t: string, i: number) => (
                       <Text key={i} className="task-item">• {t}</Text>
                     ))}
                   </View>
                </View>
             </View>
          ))}
        </View>
      </View>
    )
  }

  return (
    <View className="strategy-page">
      <View className="page-header">
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          <Text>← 返回</Text>
        </View>
        <Text className="page-title">赚钱策略</Text>
        <View className="placeholder" />
      </View>

      <View className="page-content">
        {!selectedStrategy ? (
          <View className="strategy-selection">
            <Text className="section-title">选择策略类型</Text>
            <View className="strategy-grid">
              {strategyTypes.map((strategy) => (
                <View 
                  key={strategy.id}
                  className="strategy-card"
                  onClick={() => selectStrategy(strategy.id)}
                >
                  <Text className="strategy-icon">{strategy.icon}</Text>
                  <Text className="strategy-name">{strategy.name}</Text>
                  <Text className="strategy-desc">{strategy.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View className="strategy-result">
            <ScrollView scrollY className="result-scroll">
              {isLoading ? (
                <LoadingSkeleton messages={['正在分析你的能力圈...', '匹配最佳赚钱路径...', '生成30天路线图...']} />
              ) : error ? (
                <ErrorState message={error} onRetry={() => selectStrategy(selectedStrategy)} />
              ) : !strategyResult ? (
                <EmptyState onAction={() => selectStrategy(selectedStrategy)} />
              ) : (
                <View className="result-card">
                  {strategyResult.positioning_statement && (
                    <View className="positioning-quote">
                      <Text className="quote-mark">"</Text>
                      <Text className="quote-text">{strategyResult.positioning_statement}</Text>
                      <Text className="quote-mark">"</Text>
                    </View>
                  )}
                  
                  {renderRadar(strategyResult.analysis)}
                  
                  {renderRoadmap(strategyResult.roadmap_30_days)}
                  
                  {/* 兼容非JSON格式或纯文本兜底 */}
                  {typeof strategyResult === 'string' && (
                     <Text className="result-content fallback-text">{strategyResult}</Text>
                  )}
                </View>
              )}
              
              {!isLoading && (
                <View className="back-section">
                  <View 
                    className="btn btn-secondary"
                    onClick={() => setSelectedStrategy('')}
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
