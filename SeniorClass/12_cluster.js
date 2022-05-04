const http = require('http')
const cpuCoreLength = require('os').cpus().length
const cluster = require('cluster')

if (cluster.isMaster) {
  for (let i = 0; i < cpuCoreLength; i++) {
    cluster.fork() // 开启子进程
  }
  cluster.on('exit', (worker) => {
    console.info('子进程退出')
    cluster.fork() // 进程守护
  })
} else {
  // 多个子进程会共享一个tcp连接，接供一份网络服务，没有端口冲突
  const server = http.createServer((req, res) => {
    console.info('server...')
    res.writeHead(200)
    res.end('done')
  })
  server.listen(3000)
}
