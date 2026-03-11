/**
 * 赚钱策略页面
 * 提供赚钱定位、定价、获客等策略建议
 */
import { View, Text, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

// 策略类型
const strategyTypes = [
  { id: 'positioning', name: '赚钱定位', icon: '🎯', desc: '找到你的独特卖点' },
  { id: 'pricing', name: '定价策略', icon: '💰', desc: '让客户觉得超值' },
  { id: 'channel', name: '获客渠道', icon: '📢', desc: '找到最便宜的流量' },
  { id: 'competitor', name: '竞品分析', icon: '🔍', desc: '找到你的蓝海机会' }
]

export default function StrategyPage() {
  const [selectedStrategy, setSelectedStrategy] = useState('')
  const [strategyResult, setStrategyResult] = useState(null)

  // 选择策略类型
  const selectStrategy = (strategyId) => {
    setSelectedStrategy(strategyId)
    
    // 模拟AI生成策略
    Taro.showLoading({ title: 'AI分析中...' })
    
    setTimeout(() => {
      const mockResults = {
        positioning: {
          title: '赚钱定位分析',
          content: `基于你的产品信息，我建议的定位策略：

1. **价值定位**：不是卖"Python自动化课程"，而是卖"每天多出2小时自由时间"
2. **人群定位**：不是"想学Python的人"，而是"月薪5-8k的运营，每天被重复工作折磨"
3. **场景定位**：不是"学编程"，而是"用Python解放双手，带薪摸鱼"

**差异化卖点**：
- 别人教Python语法，你教"如何用Python让老板以为你在加班"
- 别人讲理论，你讲"15分钟自动化8小时工作"`,
          actions: ['生成定位文案', '查看案例', '保存策略']
        },
        pricing: {
          title: '定价策略建议',
          content: `你的产品适合**阶梯定价**：

**基础版**：199元
- 核心自动化脚本
- 社群答疑
- 适合尝鲜用户

**进阶版**：499元
- 基础版全部
- 1对1诊断
- 定制脚本
- 适合想快速见效的用户

**企业版**：1999元
- 进阶版全部
- 团队培训
- 源码授权
- 适合小团队

**定价心理学**：
- 199元：心理账户门槛低
- 499元：对比199元显得超值
- 1999元：锚定效应，让499元看起来更划算`,
          actions: ['生成价格页', '计算ROI', '保存策略']
        }
      }
      
      setStrategyResult(mockResults[strategyId] || {
        title: '策略生成中',
        content: 'AI正在分析你的情况...',
        actions: []
      })
      
      Taro.hideLoading()
    }, 1500)
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
              <View className="result-card">
                <Text className="result-title">{strategyResult?.title}</Text>
                <Text className="result-content">
                  {strategyResult?.content}
                </Text>
                
                {strategyResult?.actions && strategyResult.actions.length > 0 && (
                  <View className="result-actions">
                    {strategyResult.actions.map((action, index) => (
                      <View key={index} className="btn btn-primary">
                        {action}
                      </View>
                    ))}
                  </View>
                )}
              </View>
              
              <View className="back-section">
                <View 
                  className="btn btn-secondary"
                  onClick={() => setSelectedStrategy('')}
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