/**
 * 成交转化页面
 * 提供价格锚定、异议处理等成交技巧
 */
import { View, Text, ScrollView } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

// 转化技巧类型
const conversionTypes = [
  { id: 'price_anchor', name: '价格锚定', icon: '⚓', desc: '让客户觉得超值' },
  { id: 'objection_handling', name: '异议处理', icon: '🛡️', desc: '化解客户拒绝' },
  { id: 'social_proof', name: '社会证明', icon: '👥', desc: '用案例说服客户' },
  { id: 'scarcity', name: '稀缺紧迫', icon: '⏰', desc: '制造购买紧迫感' },
  { id: 'upsell', name: '追加销售', icon: '📈', desc: '让客户买更多' }
]

export default function ConversionPage() {
  const [selectedConversion, setSelectedConversion] = useState<string>('')
  const [conversionResult, setConversionResult] = useState<any>(null)

  // 选择转化技巧
  const selectConversion = (conversionId: string) => {
    setSelectedConversion(conversionId)
    
    // 模拟AI生成转化技巧
    Taro.showLoading({ title: 'AI生成中...' })
    
    setTimeout(() => {
      const mockResults: any = {
        price_anchor: {
          title: '价格锚定技巧',
          content: `**三锚定价法**：

1. **高价锚**：1999元（企业定制版）
   - 作用：建立价值认知
   - 话术："企业定制版要1999，但我们有更划算的选择"

2. **中价锚**：499元（标准版）
   - 作用：主要对比对象
   - 话术："相比1999的企业版，499的标准版性价比超高"

3. **低价锚**：199元（基础版）
   - 作用：降低决策门槛
   - 话术："只要199就能开始自动化，4天就能回本"

**应用场景**：
- 朋友圈文案：先提高价，再推中价
- 私聊话术：三选一，引导选中间
- 销售页：从左到右，价格递增`,
          examples: [
            '原价999，限时499',
            '企业版1999 vs 个人版499',
            '年费1999，月付只要199'
          ]
        },
        objection_handling: {
          title: '异议处理话术',
          content: `**常见异议及应对**：

1. **"太贵了"**
   - 错误回应："不贵啊"
   - 正确话术："我理解，刚开始我也觉得贵。但你看小张，学了2周，现在每天省2小时，一个月多赚3000，这499是不是很划算？"

2. **"考虑考虑"**
   - 错误回应："好的，你考虑吧"
   - 正确话术："当然要考虑！我建议你先试试基础部分，如果觉得没用，7天内无条件退款，这样考虑起来更安心"

3. **"没时间学"**
   - 错误回应："抽时间学啊"
   - 正确话术："正是因为没时间，才要学自动化啊！每天花15分钟学，以后每天省2小时，这笔时间投资回报率超高"`,
          examples: [
            '太贵了 → 算投资回报率',
            '考虑考虑 → 降低决策风险',
            '没时间 → 强调时间投资'
          ]
        }
      }
      
      setConversionResult((mockResults as any)[conversionId] || {
        title: '转化技巧生成中',
        content: 'AI正在为你准备成交技巧...',
        examples: []
      })
      
      Taro.hideLoading()
    }, 1500)
  }

  return (
    <View className="conversion-page">
      <View className="page-header">
        <View className="back-btn" onClick={() => Taro.navigateBack()}>
          <Text>← 返回</Text>
        </View>
        <Text className="page-title">成交转化</Text>
        <View className="placeholder" />
      </View>

      <View className="page-content">
        {!selectedConversion ? (
          <View className="conversion-selection">
            <Text className="section-title">选择转化技巧</Text>
            <View className="conversion-grid">
              {conversionTypes.map((conversion) => (
                <View 
                  key={conversion.id}
                  className="conversion-card"
                  onClick={() => selectConversion(conversion.id)}
                >
                  <Text className="conversion-icon">{conversion.icon}</Text>
                  <Text className="conversion-name">{conversion.name}</Text>
                  <Text className="conversion-desc">{conversion.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View className="conversion-result">
            <ScrollView scrollY className="result-scroll">
              <View className="result-card">
                <Text className="result-title">{conversionResult?.title}</Text>
                <Text className="result-content">
                  {conversionResult?.content}
                </Text>
                
                {conversionResult?.examples && conversionResult.examples.length > 0 && (
                  <View className="examples-section">
                    <Text className="examples-title">应用示例：</Text>
                    {conversionResult.examples.map((example: string, index: number) => (
                      <View key={index} className="example-item">
                        <Text className="example-bullet">•</Text>
                        <Text className="example-text">{example}</Text>
                      </View>
                    ))}
                  </View>
                )}
                
                <View className="result-actions">
                  <View
                    className="btn btn-primary"
                    onClick={() => Taro.showToast({ title: '功能开发中', icon: 'none' })}
                  >
                    生成完整话术
                  </View>
                  <View
                    className="btn btn-secondary"
                    onClick={() => Taro.showToast({ title: '功能开发中', icon: 'none' })}
                  >
                    模拟对话练习
                  </View>
                </View>
              </View>
              
              <View className="back-section">
                <View 
                  className="btn btn-secondary"
                  onClick={() => setSelectedConversion('')}
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
