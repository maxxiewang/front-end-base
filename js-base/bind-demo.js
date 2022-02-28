// 模拟 bind

//! bind可以传入很多个参，而第一个参数即为this
Function.prototype.bind1 = function () {
  // 将参数拆解为数组
  const args = Array.prototype.slice.call(arguments)

  // 获取 this（数组第一项）
  const t = args.shift()

  // fn1.bind(...) 中的 fn1
  const self = this

  // 返回一个函数
  return function () {
    return self.apply(t, args)
  }
}

function fn1(a, b, c) {
  console.log('this', this)
  console.log(a, b, c)
  return 'this is fn1'
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30)
const res = fn2()
console.log(res)

let obj = {
  name: '小o',
  goWhere: function (params) {
    return this.name + params
  },
}

let aa = obj.goWhere.bind({ name: '小夏' }, '哈哈')()
console.log(aa)

function getName(name, age) {
  console.log('this', this)
  console.log(name, age)
}

let arr = [1, 2, 3]
arr.slice
