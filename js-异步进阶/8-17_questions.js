if (false) {
  async function fn() {
    return 100
  }

  ;(async function () {
    const a = fn() // a 是一个Promise
    console.log('aa', a) // Promise
    const b = await fn()
    console.log('bb', b) //100
  })()
}

// ;(async function () {
//   console.log('start') // 1
//   const a = await 100
//   console.log('a', a) // a,100  3
//   const b = await Promise.resolve(200)
//   console.log('b', b) // b, 200 4
//   const c = await Promise.reject(300)
//   console.log('c', c) // 不执行
//   console.log('end') //
// })()

async function async1() {
  console.log('async1 start') // 2
  await async2()
  console.log('async1 end') // 6
}

async function async2() {
  console.log('async2') // 3
}

console.log('script start') // 1
setTimeout(function () {
  console.log('setTimout') // 8
})
async1()
new Promise((resolve) => {
  console.log('promise1') // 4
  resolve()
}).then(() => {
  console.log('promise2') // 7
})
console.log('script end') // 5
