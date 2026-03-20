import { View, Text } from '@tarojs/components'
import { useState, useEffect } from 'react'
import './index.scss'

interface LoadingSkeletonProps {
  messages?: string[]
}

export default function LoadingSkeleton({ messages = ['正在调取直复式营销方法论...', '正在分析你的能力圈...', '生成专属路径中...'] }: LoadingSkeletonProps) {
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [messages])

  return (
    <View className="loading-skeleton">
      <View className="marquee-box">
        <Text className="marquee-text">{messages[msgIndex]}</Text>
      </View>
      <View className="skeleton-card">
        <View className="sk-title"></View>
        <View className="sk-line w-100"></View>
        <View className="sk-line w-80"></View>
        <View className="sk-line w-60"></View>
      </View>
      <View className="skeleton-card">
        <View className="sk-title"></View>
        <View className="sk-line w-90"></View>
        <View className="sk-line w-70"></View>
      </View>
    </View>
  )
}
