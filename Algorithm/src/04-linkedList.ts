//* 反转单向链表 ，链表是一种物理结构
// 一般输出链表指的都是头（单向链表），或是尾（双向链表），即链表的一个节点

// const n1 = { value: 100, next: n2 }
// const n2 = { value: 200, next: n3, prev: n1 }
// const n3 = { value: 300, next: n4, prev: n2 }
// const n4 = { value: 400, prev: n3 }

interface IlinkListNode {
  value: number,
  next?: IlinkListNode,
  prev?: IlinkListNode
}


//* 根据数组创建单向链表
function createLinkList(arr: number[]): IlinkListNode {
  const length = arr.length
  if (length === 0) throw new Error('arr is empty')
  let curNode: IlinkListNode = {
    value: arr[length - 1],
  }
  if (length === 1) return curNode
  // 从数组倒数第二个开始一步一步减
  for (let i = length - 2; i >= 0; i--) {
    curNode = {
      value: arr[i],
      next: curNode
    }
  }
  return curNode
}

let arr = [100, 200, 300, 400, 500]
const list = createLinkList(arr)
console.log(list)