/* 
  数组扁平化
*/

//* push
export function flatten1(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(n => {
        res.push(n)
      })
    } else {
      res.push(item)
    }
  })
  return res
}

//* 使用concat
export function flatten2(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    //! concat自动一级扁平化
    res = res.concat(item)
  })
  return res
}



const arr = [1, 2, [3, [4]], 5]
console.info(flatten2(arr))