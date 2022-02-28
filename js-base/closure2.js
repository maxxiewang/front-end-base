console.log('闭包演示')

//! 函数作为返回值
// function create() {
//   const a = 100
//   return function () {
//     console.log(a)
//   }
// }
// const fn = create()
// const a = 200
// fn()

//! 函数作为参数被传递
function print(fn) {
  let a = 200
  fn()
}
let a = 100
function fn() {
  console.log(a) //* 自由变量在它定义的地方往上一级去导找
}

print(fn)

//! 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找，不是在执行的地方！！
