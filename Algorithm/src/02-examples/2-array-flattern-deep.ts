//! 深度扁平化，深度理解concat 与 push的区别
export function flatttenDeep(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // console.info(item)
      const flatItem = flatttenDeep(item) // 递归得到最后拍平的数组
      flatItem.forEach(n => {
        res.push(n)
      })
    } else {
      res.push(item)
    }
  })
  return res
}

export function falttenDeep2(arr: any[]): any[] {
  let res: any[] = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      const flatItem = falttenDeep2(item)
      res = res.concat(flatItem)
    } else {
      res = res.concat(item)
    }
  })
  return res
}
const arr = [1, 2, 3, [4, [5, 6], 7], 8]
console.info(falttenDeep2(arr))