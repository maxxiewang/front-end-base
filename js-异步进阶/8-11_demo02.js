//* 一个变种
async function async1() {
  console.log('async1 start') // 2
  await async2()
  console.log('async1 end') // 6
  await async3() // 7
  console.log('async1 end 2') // 8
}

async function async2() {
  console.log('async2') // 3
}

async function async3() {
  console.log('async3') // 5
}

console.log('scrpit start') // 1
async1()
console.log('script end') // 4
//! 前4步都是同步的内容，4步结束后开始异步代码的执行
async3()
