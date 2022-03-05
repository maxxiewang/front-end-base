function loadImg(src) {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败 ${src}`)
      reject(err)
    }
    img.src = src
  })
  return p
}

//* 基于aync await 加载图片案例
// const url2 =
//   'https://tse2-mm.cn.bing.net/th/id/OIP-C.cgFP9ULzqaYTyqspuhFt8wHaE8?pid=ImgDet&rs=1'
// ;(async function () {
//   const p = await loadImg(url2)
//   console.log('p', p.width)
// })()

// function get() {
//   console.log(11)
// }

// ;(async function () {
//   await get()
// })()

// console.log(12)
