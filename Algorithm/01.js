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

let arr = [1, 2, 3, 4, 5, 6, 7]
// let res = arr.pop(arr.length)
// console.log(arr)
// console.log(res)

function shiftArr(key, arr) {
  const step = Math.abs(key % arr.length) // A%B，只要A<B ,都等于A自身
  console.log(1, key)
  console.log(2, arr.length)
  console.log(3, step)
  console.log(3 % 7)
  // console.log('step>', step)
  for (let i = 0; i < key; i++) {
    let res = arr.pop(arr.length)
    arr.unshift(res)
  }
  return arr
}

console.log(shiftArr(3, arr))
