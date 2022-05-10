const { WebSocketServer } = require('ws')
const wsServer = new WebSocketServer({ port: 3000 })

const list = new Set()
wsServer.on('connection', (curWs) => {
  list.add(curWs)
  curWs.on('message', (msg) => {
    console.info('receive msg' + msg.toString())
    // 传递给其他客户端
    list.forEach((ws) => {
      if (ws === curWs) return
      ws.send(msg.toString())
    })
  })
})
