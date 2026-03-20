/**
 * 朋友圈卖货文案生成页
 * 核心AI功能：首个开发的赚钱Agent
 */
import { View, Text, ScrollView, Textarea } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'
import useAppStore from '../../store'
import apiService from '../../services/api'
import './index.scss'

// 文案类型选项
const copyTypes = [
  { id: 'friendship_ads', name: '朋友圈卖货文案', desc: '5条即发即用的朋友圈文案' },
  { id: 'private_chat', name: '私聊成交话术', desc: '含异议处理的对话脚本' },
  { id: 'redbook_posts', name: '小红书种草文案', desc: '标题+正文+标签全套生成' },
  { id: 'official_account', name: '公众号销售长文', desc: '2000字完整销售信' },
  { id: 'community_script', name: '社群发售脚本', desc: '7天完整发售节奏+文案' },
  { id: 'copy_diagnosis', name: '文案诊断优化', desc: '粘贴你的文案，AI帮你改' }
]

// 模拟生成的一个文案结果
const mockResult = [
  {
    index: 1,
    title: '文案①：痛点型（戳中焦虑）',
    content: `做运营3年，每天重复着\n复制粘贴、导数据、做日报。\n\n直到我用Python写了个脚本，\n把8小时的活压缩到15分钟。\n\n老板以为我在加班冲业绩，\n其实我在带薪摸鱼。\n\n我把这套方法整理成了课，\n0基础也能学会。\n限时199，今晚12点恢复399。\n👇 扫码了解`,
    strategy_analysis: '钩子→痛点共鸣（运营日常焦虑），中段→个人故事（社会证明），结尾→CTA+限时紧迫感'
  },
  {
    index: 2,
    title: '文案②：成果型（展示结果）',
    content: `3个月前，我还是个月薪5千的运营。\n\n现在，我用 Python 自动化，\n每月多赚 1 万 2。\n\n不需要写代码基础，\n只要会用电脑就能学。\n\n29 个人已经报名，\n平均 4 天回本。\n\n名额有限，扫码抢占。`,
    strategy_analysis: '钩子→成果展示（收入数字冲击），中段→数据证明（29人平均4天回本），结尾→紧迫感（名额有限）'
  },
  {
    index: 3,
    title: '文案③：对话型（场景代入）',
    content: `粉丝私信问我：\n"博主，我工资月光，想学点技能该咋整？"\n\n我说：别急着报班，\n先试试用 Python 自动化你的工作。\n\n她学了 2 周，\n现在每天少干 2 小时，\n还能用技能接副业。\n\n想了解的，点下方链接。`,
    strategy_analysis: '钩子→粉丝提问（场景代入），中段→案例故事（真实案例），结尾→行动引导'
  }
]

export default function CopywritingPage() {
  const { config, addToHistory, setLoading, setError } = useAppStore()

  const [step, setStep] = useState(1) // 1:选择类型  2:填写信息  3:生成结果
  const [copyType, setCopyType] = useState('')
  const [productInfo, setProductInfo] = useState({
    product: config.user.product || '',
    targetAudience: config.user.targetAudience || '',
    price: '',
    objective: '',
    style: ''
  })
  const [results, setResults] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    setProductInfo((prev: any) => ({
      ...prev,
      product: prev.product || config.user.product || '',
      targetAudience: prev.targetAudience || config.user.targetAudience || ''
    }))
  }, [config.user.product, config.user.targetAudience])

  const tryParseJsonFromText = (text: string) => {
    const trimmed = (text || '').trim()
    if (!trimmed) return null

    const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i)
    const candidate = (fenced?.[1] || trimmed).trim()

    const tryParse = (s: string) => {
      try {
        return JSON.parse(s)
      } catch (_) {
        return null
      }
    }

    if (candidate.startsWith('{') || candidate.startsWith('[')) {
      const parsed = tryParse(candidate)
      if (parsed) return parsed
    }

    const firstObj = candidate.indexOf('{')
    const lastObj = candidate.lastIndexOf('}')
    if (firstObj !== -1 && lastObj !== -1 && lastObj > firstObj) {
      const parsed = tryParse(candidate.slice(firstObj, lastObj + 1))
      if (parsed) return parsed
    }

    const firstArr = candidate.indexOf('[')
    const lastArr = candidate.lastIndexOf(']')
    if (firstArr !== -1 && lastArr !== -1 && lastArr > firstArr) {
      const parsed = tryParse(candidate.slice(firstArr, lastArr + 1))
      if (parsed) return parsed
    }

    return null
  }

  const normalizeResultItem = (item: any, index: number) => {
    if (typeof item === 'string') {
      return { index: index + 1, title: `文案${index + 1}`, content: item, strategy_analysis: '' }
    }

    if (!item || typeof item !== 'object') return null

    const title = (item.title || item.name || `文案${index + 1}`).toString()
    const rawContent = item.content ?? item.text ?? item.body ?? item.copy ?? item.output ?? ''
    const rawAnalysis = item.strategy_analysis ?? item.strategy ?? item.analysis ?? ''

    const content =
      typeof rawContent === 'string' ? rawContent : JSON.stringify(rawContent, null, 2)
    const strategy_analysis =
      typeof rawAnalysis === 'string' ? rawAnalysis : JSON.stringify(rawAnalysis, null, 2)

    return {
      index: typeof item.index === 'number' ? item.index : index + 1,
      title,
      content,
      strategy_analysis
    }
  }

  const normalizeResults = (raw: any) => {
    let candidate: any = raw
    while (
      candidate &&
      typeof candidate === 'object' &&
      'data' in candidate &&
      (candidate.success === true || 'format' in candidate || 'isMock' in candidate)
    ) {
      candidate = (candidate as any).data
    }

    if (typeof candidate === 'string') {
      const parsed = tryParseJsonFromText(candidate)
      if (parsed) candidate = parsed
    }

    if (Array.isArray(candidate)) {
      return candidate
        .map((it, idx) => normalizeResultItem(it, idx))
        .filter((x) => Boolean(x))
    }

    if (candidate && typeof candidate === 'object') {
      const one = normalizeResultItem(candidate, 0)
      if (one) return [one]
      return [{ index: 1, title: '生成结果', content: JSON.stringify(candidate, null, 2), strategy_analysis: '' }]
    }

    if (typeof candidate === 'string' && candidate.trim()) {
      return [{ index: 1, title: '生成结果', content: candidate, strategy_analysis: '' }]
    }

    return []
  }

  // 选择文案类型
  const selectType = (type: { id: string }) => {
    setCopyType(type.id)
    setStep(2)
  }

  // 填写产品信息
  const handleInputChange = (field: string, value: string) => {
    setProductInfo((prev: any) => ({
      ...prev,
      [field]: value
    }))
  }

  // 生成文案
  const generateCopy = async () => {
    // 验证AI配置
    if (!config.ai.apiKey) {
      Taro.showToast({
        title: '请先配置AI API Key',
        icon: 'error'
      })
      Taro.navigateTo({ url: '/pages/settings/index' })
      return
    }

    // 验证产品信息
    if (!productInfo.product || !productInfo.targetAudience) {
      Taro.showToast({
        title: '请填写产品信息和目标客户',
        icon: 'error'
      })
      return
    }

    try {
      setLoading(true)
      Taro.showLoading({ title: 'AI生成中...' })

      // 调用API
      const result = await apiService.executeAgent({
        agentType: 'copywriting',
        skillType: copyType,
        config: {
          aiConfig: {
            provider: config.ai.provider,
            apiKey: config.ai.apiKey,
            apiEndpoint: config.ai.apiEndpoint,
            model: config.ai.model
          },
          larkConfig: config.lark.appId ? config.lark : null
        },
        userParams: {
          ...productInfo,
          userId: config.user.userId
        }
      })

      const normalized = normalizeResults(result)
      if (!normalized.length) {
        throw new Error('生成结果为空，请稍后重试')
      }

      // 保存到历史记录
      const record = {
        id: `gen_${Date.now()}`,
        agentType: 'copywriting',
        skillType: copyType,
        inputParams: productInfo,
        outputContent: result,
        generatedAt: new Date().toISOString(),
        strategyTags: ['朋友圈文案', '直复式营销']
      }
      
      addToHistory(record)
      setResults(normalized)
      setStep(3)
      setCurrentIndex(0)
      
      Taro.showToast({ title: '生成成功', icon: 'success' })
    } catch (error: any) {
      console.error('生成文案失败:', error)
      setError(error.message)
      Taro.showToast({
        title: error.message || '生成失败',
        icon: 'error'
      })
      
      // 如果API失败，使用模拟数据
      setResults(mockResult)
      setStep(3)
      setCurrentIndex(0)
    } finally {
      setLoading(false)
      Taro.hideLoading()
    }
  }

  // 复制文案
  const copyToClipboard = (text: string) => {
    Taro.setClipboardData({
      data: text,
      success: () => {
        Taro.showToast({ title: '已复制', icon: 'success' })
      }
    })
  }

  // 返回
  const goBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      Taro.navigateBack()
    }
  }

  // 渲染步骤1：选择类型
  const renderStep1 = () => (
    <View className="type-selection">
      <Text className="page-title">你想生成什么文案？</Text>
      <View className="type-grid">
        {copyTypes.map((type) => (
          <View 
            key={type.id} 
            className="type-card"
            onClick={() => selectType(type)}
          >
            <Text className="type-name">{type.name}</Text>
            <Text className="type-desc">{type.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  )

  // 渲染步骤2：填写信息
  const renderStep2 = () => (
    <View className="info-form">
      <Text className="page-title">告诉我更多细节</Text>
      
      <View className="form-group">
        <Text className="form-label">你在卖什么？</Text>
        <View className="input-wrapper">
          <Textarea
            className="input"
            placeholder="例：Python自动化课程"
            value={productInfo.product}
            onInput={(e) => handleInputChange('product', e.detail.value)}
          />
        </View>
      </View>

      <View className="form-group">
        <Text className="form-label">卖给谁？</Text>
        <View className="input-wrapper">
          <Textarea
            className="input"
            placeholder="例：想提效的运营人员"
            value={productInfo.targetAudience}
            onInput={(e) => handleInputChange('targetAudience', e.detail.value)}
          />
        </View>
      </View>

      <View className="form-group">
        <Text className="form-label">你的价格？</Text>
        <View className="price-options">
          {['0-99', '100-499', '500-1999', '2000+'].map((price) => (
            <View 
              key={price}
              className={`price-option ${productInfo.price === price ? 'active' : ''}`}
              onClick={() => handleInputChange('price', price)}
            >
              <Text>{price}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="form-group">
        <Text className="form-label">文案目标？</Text>
        <View className="objective-options">
          {[
            { id: 'direct_sale', name: '直接成交' },
            { id: '引流', name: '引流加微信' },
            { id: 'presell', name: '预热种草' },
            { id: 'promotion', name: '促销活动' }
          ].map((obj) => (
            <View 
              key={obj.id}
              className={`objective-option ${productInfo.objective === obj.id ? 'active' : ''}`}
              onClick={() => handleInputChange('objective', obj.id)}
            >
              <Text>{obj.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="btn-group">
        <View className="btn btn-primary" onClick={generateCopy}>
          生成文案
        </View>
      </View>
    </View>
  )

  // 渲染步骤3：生成结果
  const renderStep3 = () => {
    const current: any = results[currentIndex]
    
    if (!current) {
      return (
        <View className="result-view">
          <View className="result-card">
            <Text className="result-title">暂无生成结果</Text>
            <View className="result-actions">
              <View className="btn btn-secondary" onClick={goBack}>
                返回
              </View>
              <View className="btn btn-primary" onClick={generateCopy}>
                重新生成
              </View>
            </View>
          </View>
        </View>
      )
    }

    return (
      <View className="result-view">
        <ScrollView scrollY className="results-scroll">
          <View className="result-card">
            <View className="result-header">
              <Text className="result-title">{current.title}</Text>
              <Text className="result-divider">────────────────────</Text>
            </View>
            
            <Text className="result-content">
              {current.content}
            </Text>
            
            <View className="strategy-section">
              <Text className="strategy-label">策略解析：</Text>
              <Text className="strategy-content">{current.strategy_analysis}</Text>
            </View>
            
            <View className="result-actions">
              <View 
                className="btn btn-primary"
                onClick={() => copyToClipboard((current.content || '').toString())}
              >
                复制文案
              </View>
              <View className="btn btn-secondary" onClick={generateCopy}>
                换一版
              </View>
              <View
                className="btn btn-text"
                onClick={() =>
                  results.length <= 1
                    ? Taro.showToast({ title: '只有一条结果', icon: 'none' })
                    : setCurrentIndex((prev: number) => (prev + 1) % results.length)
                }
              >
                下一条 →
              </View>
            </View>
          </View>
          
          <View className="feedback-section">
            <Text className="feedback-label">这条内容对你有帮助吗？</Text>
            <View className="feedback-options">
              <Text className="feedback-icon">👎</Text>
              <Text className="feedback-icon">😐</Text>
              <Text className="feedback-icon">👍</Text>
              <Text className="feedback-icon">🔥</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }

  return (
    <View className="copywriting-page">
      {/* 顶部导航 */}
      <View className="page-header">
        <View className="back-btn" onClick={goBack}>
          <Text>← 返回</Text>
        </View>
        <Text className="page-title-main">
          {step === 1 && '赚钱文案'}
          {step === 2 && '填写信息'}
          {step === 3 && '生成结果'}
        </Text>
        <View className="placeholder" />
      </View>

      {/* 内容区域 */}
      <View className="page-content">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </View>
    </View>
  )
}
