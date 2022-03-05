async function async1() {
  console.log('async1 start') // 2
  await async2() // 这里面要理解为，先去执行async2() , 再去进行await 操作
  // await 的后面，都可以看作是 callback 里的内容，即异步。理解为放到setTimout 里面去执行
  // 相当于 setTimeout(()=>{ console.log('async1 end')},0)
  // Promise.resolve().then(()=>{ console.log('async1 end')}) // 微任务 宏任务
  console.log('async1 end') //5
}

async function async2() {
  console.log('async2') // 3
}

console.log('scrpit start') // 1
async1() // 执行asnyc1 还没有到异步，要马上去执行
console.log('script end') // 4
