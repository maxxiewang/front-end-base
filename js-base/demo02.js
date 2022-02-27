/* 
  如何判断一个变量是不是数组？
    instanceof Array
*/

/* 
  手一个简易的jQuery，考虑插件和扩展性

*/

/* 
  class的原型本质，怎么理解？
    语法糖，本质还是基于原型继承，typeof Student 是一个function
     
*/

console.log('演示class实现继承')

class Student {
  constructor(name = '无', age = 0) {
    this.name = name
    this.age = age
  }
  syaHi() {
    console.log(`姓名: ${this.name}`)
  }
}

// 通类 new 对象、实例
const xiaoming = new Student('小明', 19)
// console.log(xiaoming)

class HighStu extends Student {
  constructor(name, age, scores) {
    super(name, age)
    this.scores = scores
  }
}
let tom = new HighStu('tom', 16, 400)
// console.log(tom)
// console.log(xiaoming.__proto__)
// let obj = new Object()
// console.log(Student.prototype === xiaoming.__proto__)
// console.log(obj.__proto__)

console.log(HighStu.prototype.__proto__ === Student.prototype)
console.log(Student.prototype)

Object.prototype.$ = '$$$$$$$'
console.log(xiaoming.$)
