const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['import', { libraryName: "antd", style: true }]
            ]
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.less'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      '~': path.resolve(__dirname, 'src/')
    }
  }
};
