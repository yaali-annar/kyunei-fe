const path = require('path')

const common = require('./webpack.common.js')
const { resolve } = require('./import.resolver.js')

resolve.alias['react-dom'] = '@hot-loader/react-dom'

module.exports = {
  ...common, 
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve,
}
