import { View, Text, Button } from '@tarojs/components'
import './index.scss'

interface ErrorStateProps {
  message?: string
  onRetry: () => void
}

export default function ErrorState({ message = '军师的大脑刚才走神了，请再试一次。', onRetry }: ErrorStateProps) {
  return (
    <View className="state-feedback error-state">
      <View className="icon">🍵</View>
      <Text className="message">{message}</Text>
      <Button className="retry-btn" onClick={onRetry}>重新生成</Button>
    </View>
  )
}
