// ;(async function () {
//   const p1 = Promise.resolve(200)
//   const data = await p1
//   console.log('data>', data)
// })()
// ;(async function () {
//   try {
//     const p2 = Promise.reject('err1')
//     const res = await p2
//     console.log('res', res)
//   } catch (error) {
//     console.log('错误', error)
//   }
// })()

console.log(1)
Promise.resolve(33).then((res) => {
  console.log(2)
})
console.log(3)
