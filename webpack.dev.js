const path = require('path');
const merge = require("webpack-merge");
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const commonWebpack = require('./webpack.common');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonWebpack, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name]-bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '/dist')
  },
  devServer: {
    port: 3000,
    contentBase: './dist',
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      // For css modules:
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {loader: 'sass-loader'}
        ],
        exclude: /\.global\.scss$/
      },
      // For global css (file should end with '.global.scss'):
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true
            }
          },
          {loader: 'sass-loader'}
        ],
        include: /\.global\.scss$/
      },
      {
        test: /\.less$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: { 
              modifyVars: require("./src/ant-design-theming"),
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  }
});
