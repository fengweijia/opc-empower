/**
 * 全局状态管理
 * 使用Zustand管理用户配置、AI结果等状态
 */
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import Taro from '@tarojs/taro'

// 状态类型定义
interface UserConfig {
  lark: {
    appId: string
    appSecret: string
    appToken: string
    tableId: string
  }
  ai: {
    provider: string
    apiKey: string
    apiEndpoint: string
    model: string
  }
  user: {
    userId: string
    product: string
    targetAudience: string
  }
}

interface GenerationRecord {
  id: string
  agentType: string
  skillType: string
  inputParams: any
  outputContent: any
  generatedAt: string
  strategyTags?: string[]
}

interface AppState {
  // 用户配置
  config: UserConfig
  // 生成历史
  history: GenerationRecord[]
  // 当前生成结果
  currentResult: any
  // 加载状态
  loading: boolean
  // 错误信息
  error: string | null
  
  // Actions
  updateConfig: (section: keyof UserConfig, key: string, value: string) => void
  saveConfig: () => Promise<void>
  addToHistory: (record: GenerationRecord) => void
  clearHistory: () => void
  setCurrentResult: (result: any) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

// 默认配置
const defaultConfig: UserConfig = {
  lark: {
    appId: '',
    appSecret: '',
    appToken: '',
    tableId: ''
  },
  ai: {
    provider: 'openai',
    apiKey: '',
    apiEndpoint: '',
    model: 'gpt-4'
  },
  user: {
    userId: `u_${Date.now()}_${Math.random().toString(16).slice(2)}`,
    product: '',
    targetAudience: ''
  }
}

// 创建store
const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // 初始状态
      config: defaultConfig,
      history: [],
      currentResult: null,
      loading: false,
      error: null,

      // 更新配置
      updateConfig: (section, key, value) => {
        set((state) => ({
          config: {
            ...state.config,
            [section]: {
              ...state.config[section],
              [key]: value
            }
          }
        }))
      },

      // 保存配置到本地存储
      saveConfig: async () => {
        try {
          await Taro.setStorage({
            key: 'opc_config',
            data: get().config
          })
        } catch (error) {
          console.error('保存配置失败:', error)
          throw error
        }
      },

      // 添加到历史记录
      addToHistory: (record) => {
        set((state) => ({
          history: [record, ...state.history].slice(0, 100) // 最多保存100条
        }))
      },

      // 清空历史记录
      clearHistory: () => {
        set({ history: [] })
      },

      // 设置当前结果
      setCurrentResult: (result) => {
        set({ currentResult: result })
      },

      // 设置加载状态
      setLoading: (loading) => {
        set({ loading })
      },

      // 设置错误信息
      setError: (error) => {
        set({ error })
      },

      // 重置状态
      reset: () => {
        set({
          config: defaultConfig,
          history: [],
          currentResult: null,
          loading: false,
          error: null
        })
      }
    }),
    {
      name: 'opc-app-storage',
      version: 1,
      storage: createJSONStorage(() => ({
        getItem: async (name) => {
          try {
            const res = await Taro.getStorage({ key: name })
            return (res as any)?.data ?? null
          } catch (_) {
            return null
          }
        },
        setItem: async (name, value) => {
          try {
            await Taro.setStorage({ key: name, data: value })
          } catch (_) {}
        },
        removeItem: async (name) => {
          try {
            await Taro.removeStorage({ key: name })
          } catch (_) {}
        }
      })),
      migrate: (persistedState: any) => {
        const next = persistedState || {}
        const nextConfig = next.config || defaultConfig
        const nextUser = nextConfig.user || defaultConfig.user
        const userId = nextUser.userId || `u_${Date.now()}_${Math.random().toString(16).slice(2)}`

        return {
          ...next,
          config: {
            ...defaultConfig,
            ...nextConfig,
            lark: {
              ...defaultConfig.lark,
              ...(nextConfig.lark || {})
            },
            ai: {
              ...defaultConfig.ai,
              ...(nextConfig.ai || {})
            },
            user: {
              ...defaultConfig.user,
              ...(nextConfig.user || {}),
              userId
            }
          }
        }
      },
      partialize: (state) => ({
        config: state.config,
        history: state.history
      })
    }
  )
)

export default useAppStore
