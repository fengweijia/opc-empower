import { View, Text, Button } from '@tarojs/components'
import './index.scss'

interface EmptyStateProps {
  message?: string
  actionText?: string
  onAction: () => void
}

export default function EmptyState({ 
  message = '你还没有生成过发售计划，点击下方按钮，开始你的第一次发售。', 
  actionText = '立即开启',
  onAction 
}: EmptyStateProps) {
  return (
    <View className="state-feedback empty-state">
      <View className="icon">🚀</View>
      <Text className="message">{message}</Text>
      <Button className="action-btn" onClick={onAction}>{actionText}</Button>
    </View>
  )
}
