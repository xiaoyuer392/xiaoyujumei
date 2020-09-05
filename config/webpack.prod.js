const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

productionConfig = {
  mode: 'development',
  devtool: 'source-map',
}

module.exports = merge(commonConfig, productionConfig)