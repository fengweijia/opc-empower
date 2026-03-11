/**
 * 营销落地页 - 赚钱段位测试
 * 对应OPCV2.0文档中的"你的赚钱在第几级？"
 * 创建时间: 2026-03-10
 * 作者: 小白
 */
import { View, Text, ScrollView, Button } from '@tarojs/components'
import { useState } from 'react'
import Taro from '@tarojs/taro'
import './index.scss'

// 测试题目（简化版5题）
const questions = [
  {
    id: 1,
    question: '你有没有一段能反复使用的成交话术？',
    options: [
      '没有，每次都是临时想',
      '有，但效果一般',
      '有，转化率还不错'
    ]
  },
  {
    id: 2,
    question: '你的客户主要从哪里来？',
    options: [
      '全靠朋友推荐',
      '有1-2个固定渠道',
      '有3个以上渠道在跑'
    ]
  },
  {
    id: 3,
    question: '如果你一周不发朋友圈，还能成交吗？',
    options: [
      '不能',
      '偶尔能',
      '照样能'
    ]
  },
  {
    id: 4,
    question: '你有没有"追销"流程？',
    options: [
      '追销是什么？',
      '有但没系统化',
      '有完整追销体系'
    ]
  },
  {
    id: 5,
    question: '你的文案发出去，平均多少人主动找你咨询？',
    options: [
      '几乎没有',
      '偶尔有',
      '经常有'
    ]
  }
]

// 段位定义
const levels = [
  { 
    name: 'Lv.1 碰运气赚钱', 
    desc: '没有策略，全靠运气和人脉',
    min: 0, max: 5 
  },
  { 
    name: 'Lv.2 体力赚钱', 
    desc: '有产品有能力，但每一单都要自己去聊去跟',
    min: 6, max: 10 
  },
  { 
    name: 'Lv.3 文案赚钱', 
    desc: '你的文案能自动帮你筛选和成交客户',
    min: 11, max: 13 
  },
  { 
    name: 'Lv.4 系统赚钱', 
    desc: '你搭建了完整的成交流程，流量进来自动走完全流程',
    min: 14, max: 15 
  }
]

export default function Landing() {
  const [step, setStep] = useState(0) // 0=介绍, 1-5=问答, 6=结果
  const [answers, setAnswers] = useState<number[]>([])
  const [score, setScore] = useState(0)

  // 开始测试
  const startTest = () => {
    setStep(1)
    setAnswers([])
  }

  // 选择答案
  const selectAnswer = (optionIndex: number) => {
    // 每题得分：0, 1, 2
    const newAnswers = [...answers, optionIndex]
    setAnswers(newAnswers)

    if (step < 5) {
      setStep(step + 1)
    } else {
      // 计算总分
      const total = newAnswers.reduce((sum, val) => sum + val, 0)
      setScore(total)
      setStep(6)
    }
  }

  // 获取当前段位
  const getCurrentLevel = () => {
    return levels.find(l => score >= l.min && score <= l.max) || levels[0]
  }

  // 跳转体验
  const startExperience = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  // 重新测试
  const retakeTest = () => {
    setStep(0)
    setAnswers([])
    setScore(0)
  }

  return (
    <ScrollView className='landing-container' scrollY>
      {/* 步骤0: 介绍页 */}
      {step === 0 && (
        <View className='intro-section'>
          <View className='intro-icon'>💰</View>
          <Text className='intro-title'>你的赚钱在第几级？</Text>
          <Text className='intro-subtitle'>测一测你的赚钱段位</Text>
          
          <View className='intro-desc'>
            <Text>5道题，测出你的赚钱段位</Text>
            <Text>看看你卡在哪一层</Text>
          </View>

          <Button className='start-btn' onClick={startTest}>
            开始测试（免费）
          </Button>

          <Text className='intro-stat'>已有 12,843 人完成测试</Text>
        </View>
      )}

      {/* 步骤1-5: 问答 */}
      {step > 0 && step <= 5 && (
        <View className='question-section'>
          <View className='progress-bar'>
            <View 
              className='progress-fill' 
              style={{width: `${(step/5)*100}%`}}
            />
          </View>
          
          <Text className='question-text'>
            Q{step}: {questions[step-1].question}
          </Text>

          <View className='options-list'>
            {questions[step-1].options.map((option, idx) => (
              <View 
                key={idx} 
                className='option-item'
                onClick={() => selectAnswer(idx)}
              >
                <Text className='option-text'>{option}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* 步骤6: 结果页 */}
      {step === 6 && (
        <View className='result-section'>
          <Text className='result-label'>你的赚钱段位：</Text>
          
          <View className='level-card'>
            <Text className='level-name'>{getCurrentLevel().name}</Text>
            <Text className='level-desc'>{getCurrentLevel().desc}</Text>
          </View>

          <View className='level-progress'>
            <View className='progress-track'>
              <View 
                className='progress-fill'
                style={{width: `${(score/15)*100}%`}}
              />
            </View>
            <Text className='progress-text'>超过{((score/15)*100).toFixed(0)}%的测试者</Text>
          </View>

          <View className='all-levels'>
            <Text className='all-levels-title'>赚钱的5个段位：</Text>
            {levels.map((level, idx) => (
              <View 
                key={idx} 
                className={`level-item ${score >= level.min && score <= level.max ? 'current' : ''}`}
              >
                <Text className='level-item-name'>{level.name}</Text>
                <Text className='level-item-desc'>{level.desc}</Text>
              </View>
            ))}
          </View>

          <View className='cta-section'>
            <Text className='cta-text'>
              你从{getCurrentLevel().name}到Lv.3只差一步：
              一套能自动帮你卖货的文案系统。
            </Text>
            
            <Text className='cta-feature'>
              MoneySkill可以帮你：
            </Text>
            <View className='feature-list'>
              <Text>✓ 3分钟生成专属卖货文案</Text>
              <Text>✓ 设计你的自动成交流程</Text>
              <Text>✓ 掌握直复式营销的赚钱技术</Text>
            </View>

            <Button className='cta-btn' onClick={startExperience}>
              免费体验 MoneySkill →
            </Button>
          </View>

          <View className='result-footer'>
            <Text>已有 3,291 位OPC创业者在使用</Text>
            <Text className='retake' onClick={retakeTest}>重新测试</Text>
          </View>
        </View>
      )}
    </ScrollView>
  )
}