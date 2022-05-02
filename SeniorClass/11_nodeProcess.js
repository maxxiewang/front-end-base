const http = require('http')
const fork = require('child_process').fork // frok 和 cluster

const server = http.createServer((req, res) => {
  if (req.url === '/getsum') {
    console.info('主进程id', process.pid)
    // 开启子进程
    const computeProcess = fork('./webworkr.js')
    computeProcess.send('开始计算')
    computeProcess.on('message', (data) => {
      console.log('主进程接收到的信息', data)
      res.end('sum is ' + data)
    })
    // 监听子进程的意外情况
    computeProcess.on('close', () => {
      console.info('子进程因报错而关闭')
      computeProcess.kill()
      res.end('errorrrr')
    })
  }
})

server.listen(3000, () => {
  console.info('start 3000')
})
