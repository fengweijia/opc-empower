const fs = require('fs')
const path = require('path')

const base64Png =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/6X+4gAAAABJRU5ErkJggg=='

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function writePng(filePath) {
  const buf = Buffer.from(base64Png, 'base64')
  fs.writeFileSync(filePath, buf)
}

function main() {
  const targetDir = path.join(__dirname, '..', 'src', 'assets', 'tabbar')
  ensureDir(targetDir)

  const files = [
    'home.png',
    'home-active.png',
    'history.png',
    'history-active.png',
    'profile.png',
    'profile-active.png'
  ]

  for (const f of files) {
    const fp = path.join(targetDir, f)
    if (!fs.existsSync(fp)) {
      writePng(fp)
    }
  }
}

main()

