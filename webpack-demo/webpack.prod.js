const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  //* 找到当前目录下（__dirname）下的src文件夹下的index.js，即整个工程的入口
  entry: path.join(__dirname, 'src', 'index.js'), // path模块即是寻找当前文件目录的模块
  output: {
    filename: 'bundle.[contenthash].js', //! 重点
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html', // 最终输入的文件名
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // enforce 默认为 normal 普通loader
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // 把es6转成es5
          },
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/, // 第三方插件，不转译
      },
    ],
  },
}
