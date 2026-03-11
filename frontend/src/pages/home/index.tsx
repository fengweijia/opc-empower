/**
 * OPC赚钱军师 - 首页
 * Page 5: 主页设计，按照OPCV2.0设计文档实现
 */
import { View, Text, Image } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

// 核心功能列表
const agentModules = [
  {
    id: 'copywriting',
    name: '赚钱文案',
    icon: '📝',
    desc: '让文案帮你卖货',
    path: '/pages/copywriting/index',
    color: '#00E5A0'
  },
  {
    id: 'strategy',
    name: '赚钱策略',
    icon: '🎯',
    desc: '找到最短赚钱路径',
    path: '/pages/strategy/index',
    color: '#FFD700'
  },
  {
    id: 'process',
    name: '赚钱流程',
    icon: '⚙️',
    desc: '搭建自动赚钱机器',
    path: '/pages/process/index',
    color: '#4A90D9'
  },
  {
    id: 'conversion',
    name: '成交转化',
    icon: '💰',
    desc: '让客户主动买单',
    path: '/pages/conversion/index',
    color: '#FF6B6B'
  }
]

// 首页组件
export default function HomePage() {
  const [ Insight] = useState({
    title: '今日赚钱洞察',
    content: '你的产品适合用限时发售策略做一波集中成交，要不要我帮你生成7天发售脚本？',
    actions: [
      { text: '试试看', type: 'primary' },
      { text: '换一个', type: 'secondary' }
    ]
  })

  // 跳转功能模块
  const navigateToModule = (module) => {
    Taro.navigateTo({
      url: module.path
    })
  }

  // 跳转设置
  const navigateToSettings = () => {
    Taro.navigateTo({
      url: '/pages/settings/index'
    })
  }

  // 跳转档案
  const navigateToProfile = () => {
    Taro.navigateTo({
      url: '/pages/profile/index'
    })
  }

  return (
    <View className="home-page">
      {/* 顶部导航栏 */}
      <View className="header">
        <Text className="header-title">OPC赚钱军师</Text>
        <View className="header-actions">
          <View className="header-btn" onClick={navigateToProfile}>
            <Text>档案</Text>
          </View>
          <View className="header-btn" onClick={navigateToSettings}>
            <Text>设置</Text>
          </View>
        </View>
      </View>

      {/* 主体内容 */}
      <View className="content">
        {/* 今日赚钱洞察卡片 */}
        <View className="insight-card">
          <View className="insight-header">
            <Text className="insight-icon">💡</Text>
            <Text className="insight-title">{Insight.title}</Text>
          </View>
          <Text className="insight-content">
            {Insight.content}
          </Text>
          <View className="insight-actions">
            <View className="btn btn-primary">{Insight.actions[0].text}</View>
            <View className="btn btn-secondary">{Insight.actions[1].text}</View>
          </View>
        </View>

        {/* 功能模块网格 */}
        <View className="module-grid">
          {agentModules.map((module) => (
            <View 
              key={module.id} 
              className="module-card"
              onClick={() => navigateToModule(module)}
            >
              <View className="module-icon" style={{ color: module.color }}>
                <Text>{module.icon}</Text>
              </View>
              <Text className="module-name">{module.name}</Text>
              <Text className="module-desc">{module.desc}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 底部Tab已由app.config配置，此处保留空白占位 */}
      <View className="tab-bar-placeholder" />
    </View>
  )
}