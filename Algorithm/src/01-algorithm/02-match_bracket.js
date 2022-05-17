/* 
  判断字符串是否括号匹配
  一个字符串s可能包含{} () [] 三种括号，判断s是否是括号匹配的
  如(a{b}c)匹配，而{a(b 或 {a(b}c)则不匹配

  ! 考察的要点就一个：栈
  先进后出， API: push pop length  
*/
const stack = []
stack.push(100) // 压栈
stack.push(200)
stack.push(300)
stack.pop() // 出栈
// console.log(stack)

/* 
* 逻辑结构vs物理结构
  栈 VS 数组 
  栈，逻辑结构。理论模型，不管如何实现，不受任可语言限制。
  数组，物理结构。真实的功能实现，受限于编程语言。
  */

function isMatch(left, right) {
  //判断左右括号是否匹配
  if (left === '{' && right === '}') return true
  if (left === '[' && right === ']') return true
  if (left === '(' && right === ')') return true
  return false
}

//* 时间复杂度O(n) 空间复杂度O(n) (由于要压栈，不知道要压多少，所以和str是一样的，n)
function matchBracket(str) {
  const length = str.length
  if (length === 0) return true
  const stack = []
  const leftSymbols = '{(['
  const rightSymbols = '})]'

  for (let i = 0; i < length; i++) {
    const s = str[i]
    if (leftSymbols.includes(s)) {
      // 左括号，压栈
      stack.push(s)
    } else if (rightSymbols.includes(s)) {
      const top = stack[stack.length - 1]
      if (isMatch(top, s)) {
        stack.pop()
      } else {
        return false // 不match的情况直接就false
      }
    }
  }
  return stack.length === 0
}

const str = '{(({ab}))88e{}()}'
const res = matchBracket(str)
console.log(res)
