const path = require("path");
const commonWebpack = require("./webpack.common");
const merge = require("webpack-merge");
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonWebpack, {
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, "/dist")
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      // For css modules (should end with '.module.scss'):
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
        include: /\.module\.scss$/
      },
      // For global css:
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
        exclude: /\.module\.scss$/
      }
    ]
  }
});
