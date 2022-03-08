function multi(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

// for of 循环有用的地方
const nums = [1, 2, 3]
;(async function () {
  for (let i of nums) {
    const res = await multi(i)
    console.log(res)
  }
})()
