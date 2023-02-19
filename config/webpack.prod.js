const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

const commonConfig = require('./webpack.common')
const { PORT } = require('./constants')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'auto',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: PORT,
  },
  performance: {
    maxAssetSize: 20240000,
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

module.exports = merge(commonConfig, prodConfig)
