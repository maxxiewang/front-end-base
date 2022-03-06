const pList = document.querySelectorAll('p')
const p1 = pList[0]
const p2 = pList[1]

//! property的用法
//* 能通过JS的方法去获取DOM元素，来进行操作
p1.style.fontSize = '100px'
p1.className = 'p2' // 这样实际了动态改变class

//! attribue的用法
p2.setAttribute('data-name', 'imooc')
const style = p2.getAttribute('style')
p2.setAttribute('style', 'color:blue')

/* 
 attribue: 修改html属性，会改变 DOM 结构。（是真正能作用到 DOM 结构当中去，修改了标签的属性，真正能作用到节点属性）
 property: 修改对象属性，不会体现到html 结构当中（以JS变量的方法，去修改DOM的变量）

 两者都有可能引起 DOM 的重新渲染，建议建量去用property去操作，DOM重新渲染比较耗费性能。
 */
