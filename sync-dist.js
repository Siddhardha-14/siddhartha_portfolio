const fs = require('fs')
const path = require('path')

const distDir = path.join(__dirname, 'react-portfolio', 'dist')
if (!fs.existsSync(distDir)) {
  console.error('react-portfolio/dist does not exist. Run build first.')
  process.exit(1)
}

// 1. Copy dist/index.html to root index.html
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(__dirname, 'index.html'))
console.log('✓ Synced dist/index.html -> ./index.html')

// 2. Copy dist/favicon.svg to root favicon.svg
if (fs.existsSync(path.join(distDir, 'favicon.svg'))) {
  fs.copyFileSync(path.join(distDir, 'favicon.svg'), path.join(__dirname, 'favicon.svg'))
}

// 3. Copy compiled JS/CSS bundles from dist/assets to root assets/
const distAssets = path.join(distDir, 'assets')
const rootAssets = path.join(__dirname, 'assets')

if (fs.existsSync(distAssets)) {
  if (!fs.existsSync(rootAssets)) fs.mkdirSync(rootAssets, { recursive: true })
  const files = fs.readdirSync(distAssets)
  for (const file of files) {
    fs.copyFileSync(path.join(distAssets, file), path.join(rootAssets, file))
  }
  console.log(`✓ Synced ${files.length} assets to ./assets/`)
}

console.log('✓ Successfully synchronized React production build to root.')
