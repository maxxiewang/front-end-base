//! node.js 多进程通讯，当前为子进程

function getSum() {
  let sum = 0
  for (let i = 0; i < 100 * 10000; i++) {
    sum += i
  }
  return sum
}

// 子进程接收
process.on('message', (data) => {
  console.info('子进程id', process.pid)
  console.info('子进程接收到的信息', data)
  const result = getSum()
  process.send(result) // 发送信息给主进程
})
