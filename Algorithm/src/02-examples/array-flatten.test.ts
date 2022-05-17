/* 
  数组扁平化 test 
*/

import { flatten1, flatten2 } from "./1-arryay-flattern";

describe('数组扁平化', () => {
  //* 代码规范性、鲁棒性、完整性
  it('empty arr', () => {
    const res = flatten1([])
    expect(res).toEqual([])
  })
  it('非嵌套数组', () => {
    const arr = [1, 2, 3]
    const res = flatten1(arr)
    expect(res).toEqual(arr)
  })
  it('一级嵌套', () => {
    const arr = [1, 2, [3, 4], 5]
    const res = flatten1(arr)
    expect(res).toEqual([1, 2, 3, 4, 5])
  })
  it('二级嵌套', () => {
    const arr = [1, 2, [3, [4]], 5]
    const res = flatten1(arr)
    expect(res).toEqual([1, 2, 3, [4], 5])
  })
})