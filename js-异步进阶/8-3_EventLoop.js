/* eventlooop演示 */
// console.log('hi')

// setTimeout(function cb1() {
//   console.log('cb1')
// }, 2000)

// console.log('bye')

/* Promise 代码演示 */

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('11')
//     // reject(12)
//   })
// })
// console.log(p1)

// p1.then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log('err', err)
// })

const p1 = Promise.resolve().then(() => {
  return 100
})
console.log('p1', p1)

p1.then((res) => {
  console.log('p1', res)
})

// const p2 = Promise.resolve(100)

// p2.then((res) => {
//   console.log('res2', res)
// })
// const p3 = new Promise((resolve, reject) => {
//   resolve(300)
// })

// p3.then((res) => {
//   return res
// }).then((res) => {
//   console.log(res)
// })

/* 
  第1题
   1 3
   第2题
   1，2，3
   第3题
   12 
*/
