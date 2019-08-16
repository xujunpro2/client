'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', //bulid的时候用相对路径
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false
}
