/**
 * 数据面板页面
 * 展示用户赚钱数据仪表盘
 * 创建时间: 2026-03-10
 * 作者: 小白
 */
import { View, Text, ScrollView } from '@tarojs/components'
import { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import useAppStore from '../../store'
import './index.scss'

// 模拟数据 - 实际应该从API获取
const mockStats = {
  monthly: {
    total_generated: 42,
    total_used: 28,
    usage_rate: 67,
    tracked_revenue: 12800,
    revenue_change: 32
  },
  weekly: [
    { day: '周一', generate: 5, use: 3 },
    { day: '周二', generate: 8, use: 6 },
    { day: '周三', generate: 3, use: 2 },
    { day: '周四', generate: 12, use: 8 },
    { day: '周五', generate: 7, use: 5 },
    { day: '周六', generate: 4, use: 2 },
    { day: '周日', generate: 3, use: 2 }
  ],
  top_content: [
    { title: '朋友圈卖货文案①', type: '痛点型', usage: 23 },
    { title: '私聊成交话术', type: '异议处理', usage: 18 },
    { title: '价格锚定策略', type: '定价', usage: 15 }
  ],
  ai_insight: {
    title: 'AI建议',
    content: '你的朋友圈文案转化不错，但缺少追销环节。建议试试成交后48h追销策略，预计能提升30%客单价。',
    action: '生成追销策略'
  }
}

export default function Dashboard() {
  const [stats, setStats] = useState(mockStats)
  const [loading, setLoading] = useState(false)
  const { config } = useAppStore()

  useEffect(() => {
    // 页面加载时获取数据
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    setLoading(true)
    try {
      // 实际应该调用API获取数据
      // const data = await apiService.getDashboardStats()
      // setStats(data)
      
      // 模拟加载
      setTimeout(() => {
        setLoading(false)
      }, 500)
    } catch (error) {
      console.error('获取数据失败:', error)
      setLoading(false)
    }
  }

  return (
    <ScrollView className='dashboard-container' scrollY>
      <View className='dashboard-header'>
        <Text className='title'>💰 我的赚钱数据</Text>
      </View>

      {/* 月度数据卡片 */}
      <View className='stats-grid'>
        <View className='stat-card'>
          <Text className='stat-label'>本月生成</Text>
          <Text className='stat-value'>{stats.monthly.total_generated}</Text>
          <Text className='stat-unit'>次</Text>
          <Text className='stat-change positive'>↑15%</Text>
        </View>
        <View className='stat-card'>
          <Text className='stat-label'>实际使用</Text>
          <Text className='stat-value'>{stats.monthly.total_used}</Text>
          <Text className='stat-unit'>次</Text>
          <Text className='stat-change'>使用率{stats.monthly.usage_rate}%</Text>
        </View>
        <View className='stat-card highlight'>
          <Text className='stat-label'>追踪成交</Text>
          <Text className='stat-value money'>¥{stats.monthly.tracked_revenue}</Text>
          <Text className='stat-change positive'>↑{stats.monthly.revenue_change}%</Text>
        </View>
      </View>

      {/* AI智能建议 */}
      {stats.ai_insight && (
        <View className='ai-insight-card'>
          <View className='insight-header'>
            <Text className='insight-icon'>💡</Text>
            <Text className='insight-title'>{stats.ai_insight.title}</Text>
          </View>
          <Text className='insight-content'>{stats.ai_insight.content}</Text>
          <View 
            className='insight-action'
            onClick={() => Taro.navigateTo({ url: '/pages/process/index' })}
          >
            <Text className='action-text'>{stats.ai_insight.action} →</Text>
          </View>
        </View>
      )}

      {/* 效果排行 */}
      <View className='section'>
        <Text className='section-title'>🏆 效果排行</Text>
        <View className='rank-list'>
          {stats.top_content.map((item, index) => (
            <View key={index} className='rank-item'>
              <View className='rank-num'>{index + 1}</View>
              <View className='rank-info'>
                <Text className='rank-title'>{item.title}</Text>
                <Text className='rank-type'>{item.type}</Text>
              </View>
              <View className='rank-usage'>
                <Text className='usage-num'>{item.usage}</Text>
                <Text className='usage-label'>次使用</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* 本周趋势 */}
      <View className='section'>
        <Text className='section-title'>📈 本周趋势</Text>
        <View className='chart-container'>
          <View className='chart-bars'>
            {stats.weekly.map((item, index) => (
              <View key={index} className='chart-bar-wrapper'>
                <View 
                  className='chart-bar generate'
                  style={{ height: `${item.generate * 8}px` }}
                />
                <View 
                  className='chart-bar use'
                  style={{ height: `${item.use * 10}px` }}
                />
                <Text className='chart-label'>{item.day}</Text>
              </View>
            ))}
          </View>
          <View className='chart-legend'>
            <View className='legend-item'>
              <View className='legend-dot generate' />
              <Text>生成</Text>
            </View>
            <View className='legend-item'>
              <View className='legend-dot use' />
              <Text>使用</Text>
            </View>
          </View>
        </View>
      </View>

      <View className='dashboard-footer'>
        <Text className='footer-text'>数据来源于您的使用记录</Text>
      </View>
    </ScrollView>
  )
}