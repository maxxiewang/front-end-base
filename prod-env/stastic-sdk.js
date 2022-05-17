//TODO 最好是在DOMContentLoaded中去初使化

const PV_URL_SET = new Set()

class MyStatistic {
  constructor(productId) {
    this.productId = productId
    this.initPerformance() // 性能统计，只要初始化即是开始，不需要手动触发
    this.initError() // 初始化错误监控
  }
  // 发送统计数据 private
  send(url, params = {}) {
    params.productId = this.productId
    const paramArr = [] // 把params变成一个url参数
    for (let key in params) {
      const value = params[key]
      paramArr.push(`${key}=${value}`)
    }
    const newUrl = `${url}?${paramArr.join('&')}`
    //! 关键，要用image去发送。好处：1、可跨域， 2、兼容性极好
    const img = document.createElement('img')
    img.src = newUrl // 通过get请求发出去

    return newUrl
  }
  // 初始化性能统计
  initPerformance() {
    const url =
      'https://mock.mengxuegu.com/mock/5f3e9a92fd0fa244c4c563fb/example/query'
    this.send(url, performance.timing)
    //* 需要在DOMContentLoaded中去调用，不然数据不准确
  }
  // 初始化错误监控
  initError() {
    // 有些js报错可以通过window.onerror来监听
    window.addEventListener('error', (event) => {
      const { error, lineno, colno } = event
      // 监听到了后，统一发送给error函数去发送
    })
  }
  getPV() {
    // SPA应用中，路由切换时PV是不增加的，但业务上这是算PV的，所以交给用户自己来处理
    // 本质是一个特殊的event
    const href = location.href
    if (PV_URL_SET.get(href)) return
    this.getEvent('pv')
    PV_URL_SET.add(href)
  }
  getEvent(key, val) {
    const url = 'xxx' // 自定义事件统计的serverAPI
    this.send(url, { key: val })
  }
  error(key, info) {
    // try...catch部分是onerror监听不到的，调用此事件
  }
}
