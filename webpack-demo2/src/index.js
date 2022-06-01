console.log('this is index js')
const sum12345 = (a, b) => {
  return a + b
}

const res = sum12345(10, 20)
console.log(res) // 打包之后依是ES6的代码，有可能引发兼容问题

//* 关于ES6的模块化
// import { fn, name, obj } from './moduleA'
import { fn, name, obj } from './moduleB'
import ab from './moduleC'
fn()
console.log(obj)
console.log(ab)
