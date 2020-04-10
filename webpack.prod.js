const path = require('path');
const commonWebpack = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonWebpack, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name]-[contentHash]-bundle.js',
    publicPath: '.',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ],
    splitChunks: {
      cacheGroups: {
        react_modules: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          chunks: 'all',
          name: 'react-vendors'
        },
        node_modules: {
          test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
          chunks: 'all',
          name: 'common-vendors'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]-[contentHash].css' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      // For css modules:
      {
        test: /\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false
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
          {loader: MiniCssExtractPlugin.loader},
          {loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: false
            }
          },
          {loader: 'sass-loader'}
        ],
        include: /\.global\.scss$/
      }
    ]
  }
});
