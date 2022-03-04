// * 手写promise加载一个网络图片

function loadImg(src) {
  return new Promise((resolve, reject) => {
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
}

const url =
  'https://tse2-mm.cn.bing.net/th/id/OIP-C.cgFP9ULzqaYTyqspuhFt8wHaE8?pid=ImgDet&rs=1'
const res = loadImg(url)
  .then((img) => {
    console.log(img.width)
  })
  .catch((err) => {
    console.log(err)
  })
