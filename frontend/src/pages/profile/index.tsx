import { View, Text } from '@tarojs/components'
import './index.scss'

export default function ProfilePage() {
  return (
    <View className="profile-page">
      <View className="page-header">
        <Text className="page-title">我的</Text>
      </View>
      <View className="profile-content">
        <View className="profile-card">
          <Text className="profile-name">OPC创业者</Text>
          <Text className="profile-desc">完善赚钱档案，AI更懂你</Text>
        </View>
      </View>
    </View>
  )
}
