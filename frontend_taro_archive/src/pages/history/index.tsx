import { View, Text } from '@tarojs/components'
import { useEffect, useMemo, useState } from 'react'
import Taro from '@tarojs/taro'
import useAppStore from '../../store'
import apiService from '../../services/api'
import './index.scss'

export default function HistoryPage() {
  const { history, clearHistory, config, setLoading, setError } = useAppStore()
  const [tab, setTab] = useState<'local' | 'lark'>('local')
  const [larkRecords, setLarkRecords] = useState<any[]>([])
  const [larkLoading, setLarkLoading] = useState(false)

  const larkEnabled = useMemo(() => {
    return Boolean(
      config.lark.appId &&
        config.lark.appSecret &&
        config.lark.appToken &&
        config.lark.tableId &&
        config.user.userId
    )
  }, [config.lark, config.user.userId])

  useEffect(() => {
    if (tab !== 'lark' || !larkEnabled) return

    let cancelled = false
    ;(async () => {
      setLarkLoading(true)
      setLoading(true)
      try {
        const res = await apiService.getHistory(config.lark, config.user.userId, 20)
        if (cancelled) return
        setLarkRecords(res?.items || [])
      } catch (e: any) {
        if (cancelled) return
        setError(e?.message || '获取飞书历史失败')
        Taro.showToast({ title: e?.message || '获取飞书历史失败', icon: 'error' })
      } finally {
        if (cancelled) return
        setLarkLoading(false)
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [tab, larkEnabled, config.lark, config.user.userId, setError, setLoading])

  const renderLocalEmpty = () => (
    <View className="empty">
      <Text className="empty-text">暂无本地历史记录</Text>
      <Text className="empty-tip">生成的内容会保存在此设备</Text>
    </View>
  )

  const renderLarkEmpty = () => (
    <View className="empty">
      <Text className="empty-text">暂无飞书历史记录</Text>
      <Text className="empty-tip">需要先在设置中配置飞书 App Token 与表格</Text>
    </View>
  )

  const renderLocalList = () => (
    <View className="list">
      {history.map((item) => {
        const output = item.outputContent
        const list = output?.data?.data || output?.data
        const firstTitle = Array.isArray(list) ? list[0]?.title : undefined
        const firstContent = Array.isArray(list) ? list[0]?.content : undefined

        return (
          <View
            key={item.id}
            className="item card"
            onClick={() => {
              if (!firstContent) return
              Taro.setClipboardData({ data: firstContent })
            }}
          >
            <View className="item-header">
              <Text className="item-title">{firstTitle || item.skillType}</Text>
              <Text className="item-time">{new Date(item.generatedAt).toLocaleString()}</Text>
            </View>
            <Text className="item-sub">{item.agentType}</Text>
            <Text className="item-tip">{firstContent ? '点击复制首条文案' : '无可复制内容'}</Text>
          </View>
        )
      })}
    </View>
  )

  const renderLarkList = () => (
    <View className="list">
      {larkRecords.map((r) => {
        const fields = r.fields || {}
        let generatedAt: string | undefined = fields['创建时间']
        let firstTitle: string | undefined
        let firstContent: string | undefined

        try {
          const raw = fields['生成内容']
          const parsed = raw ? JSON.parse(raw) : null
          const output = parsed?.outputContent
          const list = output?.data?.data || output?.data
          firstTitle = Array.isArray(list) ? list[0]?.title : undefined
          firstContent = Array.isArray(list) ? list[0]?.content : undefined
          generatedAt = parsed?.generatedAt || generatedAt
        } catch (_) {}

        return (
          <View
            key={r.record_id}
            className="item card"
            onClick={() => {
              if (!firstContent) return
              Taro.setClipboardData({ data: firstContent })
            }}
          >
            <View className="item-header">
              <Text className="item-title">{firstTitle || fields['Skill类型'] || r.record_id}</Text>
              <Text className="item-time">{generatedAt ? new Date(generatedAt).toLocaleString() : ''}</Text>
            </View>
            <Text className="item-sub">{fields['Agent类型'] || ''}</Text>
            <Text className="item-tip">{firstContent ? '点击复制首条文案' : '无可复制内容'}</Text>
          </View>
        )
      })}
    </View>
  )

  return (
    <View className="history-page">
      <View className="page-header">
        <Text className="page-title">历史记录</Text>
      </View>
      <View className="history-content">
        <View className="tabs">
          <View
            className={`tab ${tab === 'local' ? 'tab-active' : ''}`}
            onClick={() => setTab('local')}
          >
            本地
          </View>
          <View
            className={`tab ${tab === 'lark' ? 'tab-active' : ''}`}
            onClick={() => setTab('lark')}
          >
            飞书
          </View>
          <View className="spacer" />
          {tab === 'local' && (
            <View
              className={`btn btn-secondary ${history.length ? '' : 'btn-disabled'}`}
              onClick={() => {
                if (!history.length) return
                clearHistory()
                Taro.showToast({ title: '已清空', icon: 'success' })
              }}
            >
              清空
            </View>
          )}
        </View>

        {tab === 'local' ? (
          history.length ? (
            renderLocalList()
          ) : (
            renderLocalEmpty()
          )
        ) : !larkEnabled ? (
          renderLarkEmpty()
        ) : larkLoading ? (
          <View className="empty">
            <Text className="empty-text">加载中...</Text>
          </View>
        ) : larkRecords.length ? (
          renderLarkList()
        ) : (
          renderLarkEmpty()
        )}
      </View>
    </View>
  )
}
