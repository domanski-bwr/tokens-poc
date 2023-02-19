const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const webpack = require('webpack')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const { dependencies } = require('../package.json')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'adminApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminApp': './src/bootstrap',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: dependencies['@emotion/react'],
        },
        '@emotion/styled': {
          singleton: true,
          requiredVersion: dependencies['@emotion/styled'],
        },
        '@mui/material': {
          singleton: true,
          requiredVersion: dependencies['@mui/material'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/bw.svg',
      publicPath: '/',
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: './public',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
}
