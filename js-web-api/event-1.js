//* event事件练习

const p1 = document.getElementsByClassName('p1')[0]
// p1.addEventListener('click', (eveent) => {
//   console.log(12)
// })

// 通用的事件绑定函数
function bindEvent(elem, type, fn) {
  elem.addEventListener(type, fn)
}
bindEvent(p1, 'click', (e) => {
  // console.log(e.target) // 获取触发的元素
  e.preventDefault() // 阻止默认行为
  alert('clicked')
})
