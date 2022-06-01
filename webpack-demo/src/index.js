// 引入 css
import './style/style1.css'
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('sumRes', sumRes)
console.log('--ENV--', ENV) // 找到当前环境

// 引入图片
function insertImg(imgFile) {
  const img = new Image()
  img.src = imgFile
  document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImg(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImg(imgFile2)

//* 抽离公共代码与第三方代码
import _ from 'lodash'
console.log('lodash', _.each)

// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }
