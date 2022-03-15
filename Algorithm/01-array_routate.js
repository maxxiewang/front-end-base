/* 
  时间复杂度：程序执行时需要的计算量
  空间复杂度：程序执行时需的内存空间
*/
//! 关于时间复杂度的例子
function fn1(obj = {}, key) {
  return obj[key] // 复杂度为O(1)
}

function fn2(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]) // 一层循环复杂度为O(n)
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j]) // 双层循环的复杂度即为O(n^2)
    }
  }
}

export let arr = [1, 2, 3, 4, 5, 6, 7]

// 旋转数组K步，使用unshift
function shiftArr1(key, arr) {
  const step = Math.abs(key % arr.length) // A%B，只要A<B ,都等于A自身。key还有负数的可能
  //! 空间复杂度O(n^2)
  for (let i = 0; i < step; i++) {
    let res = arr.pop(arr.length)
    //* 数组是连续的内存空间，有序的关系，所以unshift很慢，而push很快。同理shift,splice都要慎重
    //* unshift本身的复杂度就是O(n)（数组里面每一个元素都要动一遍）所以整代函数的时间复杂度是O(n^2)
    arr.unshift(res) //! 数组是一个有序结构，unshift操作非常慢！
  }
  return arr
}

// 旋转数组K步，使用concat
function shiftArr2(key, arr) {
  if (!key || arr.length === 0) return arr
  const step = Math.abs(key % arr.length)
  //! 时间复杂度O(1)，没有任何的循环
  //! 空间复杂度O(n)，三个数组临时变量是随着输入的增加是成倍增加的
  const part1 = arr.slice(-step) // slice不会动原数组，所以时间很快
  const part2 = arr.slice(0, arr.length - step)
  const result = part1.concat(part2)
  return result
}

/* 性能测试 */
const arrTest = []
const arrTest2 = []
for (let index = 0; index < 10 * 10000; index++) {
  arrTest.push(index)
  arrTest2.push(index)
}
console.time('rotate1')
shiftArr1(4 * 1000, arrTest)
console.timeEnd('rotate1')

console.time('rotate1')
shiftArr2(4 * 1000, arrTest2)
console.timeEnd('rotate1')
