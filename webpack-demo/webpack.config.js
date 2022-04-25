const path = require('path')
// node.js的 CMD语法
module.exports = {
  mode: 'development', // production
  //* 找到当前目录下（__dirname）下的src文件夹下的index.js，即整个工程的入口
  entry: path.join(__dirname, 'src', 'index.js'), // path模块即是寻找当前文件目录的模块
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
}
