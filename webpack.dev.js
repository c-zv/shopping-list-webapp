const path = require("path");
const commonWebpack = require("./webpack.common");
const merge = require("webpack-merge");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(commonWebpack, {
  mode: 'development',
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, "/dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
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
        ]
      }
    ]
  }
});
