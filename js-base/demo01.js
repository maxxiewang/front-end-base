// typeof 能判断哪些类型？
/* 
  识别出所有值类型（string number boolean symbol undefined） 
  识别出函数 function
  判断是否为引用类型（但不可细分）
*/

// 何时使用=== 何时使用 == ？
/* 
  == 会发生类型的转换 
  除了 == null之外，其他一律用 === 例如

*/
let obj = { x: 100 }
if (obj.a == null)
  // 相当于 if(obj.a === null ||obj.a === undefined)
  // 值类型和引用类型的区别？
  // 对像是引用类型，传递地址值。 其他是值类型
  console.log('演示deepClone')

const obj1 = {
  age: 20,
  name: 'yoko',
  address: {
    city: 'tokyo',
  },
  arr: ['a', 1, 3],
}

function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 这一步保证key不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

let obj2 = deepClone(obj1)

// 数组的Key 就是0 1 2
// let arr = ['a', 2, 3]
// for (let key in arr) {
//   console.log(key)
// }

// 利用-0 和加空串
// const a = '10' - 0
// const b = 100 + ('10' - 0)
// const c = 100 + ('10' - 0)
// console.log(typeof b)
// console.log(c)
