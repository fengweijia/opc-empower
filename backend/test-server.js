/**
 * OPC赚钱军师 - 本地测试服务器
 * 模拟Serverless环境，用于端到端测试
 */

const http = require('http')
const { main } = require('./index.js')

const PORT = 3000

// 创建HTTP服务器
const server = http.createServer(async (req, res) => {
  // 只处理POST请求
  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ success: false, message: 'Method not allowed' }))
    return
  }

  // 解析请求体
  let body = ''
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', async () => {
    try {
      // 解析JSON请求
      const event = JSON.parse(body)
      
      // 调用主函数
      const result = await main(event, {})
      
      // 返回响应
      res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
      res.end(JSON.stringify(result))
      
    } catch (error) {
      console.error('服务器错误:', error)
      res.writeHead(500, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ 
        success: false, 
        message: '服务器内部错误',
        error: error.message 
      }))
    }
  })
})

// 处理OPTIONS请求（CORS）
server.on('request', (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    })
    res.end()
  }
})

// 启动服务器
server.listen(PORT, () => {
  console.log(`🚀 OPC赚钱军师测试服务器已启动`)
  console.log(`📡 监听端口: ${PORT}`)
  console.log(`🔗 测试地址: http://localhost:${PORT}`)
  console.log()
  console.log('可用API端点:')
  console.log('  POST / - 所有API请求')
  console.log()
  console.log('测试命令:')
  console.log(`  curl -X POST http://localhost:${PORT} \\`)
  console.log(`    -H "Content-Type: application/json" \\`)
  console.log(`    -d '{"action":"health"}'`)
  console.log()
  console.log('按 Ctrl+C 停止服务器')
})

// 优雅关闭
process.on('SIGINT', () => {
  console.log('\n🛑 正在关闭服务器...')
  server.close(() => {
    console.log('✅ 服务器已关闭')
    process.exit(0)
  })
})