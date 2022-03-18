//TODO 你还有更重要的事去做，你还有更有意思，更有意义的事情去做。要用其也的东西来占领他

/* 
  队列 Queue

  栈，先进后出
  队列，先进先出，API 包括 add delete length
  入队、出队
*/

// 用数组去实现一个队列，但unshift有性能问题，不是一个好的实现方式
const queue = []
queue.push(100) // 入队
queue.push(200)
queue.push(300)
const res = queue.shift() // 出队
// console.log(res)

export class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []
  add(n: number) { // 入队
    this.stack1.push(n)
  }
  delete(): number | null { // 出队
    let res
    const stack1 = this.stack1
    const stack2 = this.stack2
    // 将stack1 所有元素移动到 stack2中
    while (stack1.length) {
      const n = stack1.pop()
      if (n != null) {
        stack2.push(n)
      }
    }
    res = stack2.pop()
    // 将stack2 的所有元素再还给stack1
    while (stack2.length) {
      const n = stack2.pop()
      if (n != null) {
        stack1.push(n)
      }
    }
    return res || null
  }
  get length(): number {
    return this.stack1.length
  }
  get resQuene(): number[] {
    return this.stack1
  }
}

// 功能测试
const q = new MyQueue()
q.add(100)
q.add(200)
q.add(300)

console.log(q.length)
console.log(q.delete())
q.delete()
console.log(q.resQuene)