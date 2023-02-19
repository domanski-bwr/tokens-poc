const { merge } = require('webpack-merge')
const path = require('path')

const commonConfig = require('./webpack.common')
const { HOST, target, PORT } = require('./constants')

const publicPath = 'auto'

const proxy = {
  '/admin-app': {
    target,
    router: () => HOST,
    logLevel: 'debug',
  },
}

const devConfig = {
  mode: 'development',
  devServer: {
    liveReload: true,
    watchFiles: [path.resolve(__dirname, './src')],
    historyApiFallback: true,
    port: PORT,
    proxy,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  },
  output: {
    publicPath,
  },
  devtool: 'source-map',
}

module.exports = merge(commonConfig, devConfig)
