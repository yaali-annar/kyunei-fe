const path = require('path')
const common = require('./webpack.common.js')
const { resolve } = require('./import.resolver.js')

module.exports = { 
  ...common,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: `/`,
    filename: '[name].[contenthash].js',
  },
  resolve,
}
