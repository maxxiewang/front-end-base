/* 数组扁平化，只减少一级嵌套 */
let arr1 = [1, [2, [3]], 4]

function arrFlatten(arr) {
  if (!arr && !(arr instanceof Array)) return
  let newArr = []
  arr.forEach((item) => {
    if (item instanceof Array) {
      let index = arr.indexOf(item)
    }
  })
}
