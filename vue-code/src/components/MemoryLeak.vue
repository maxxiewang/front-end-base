<template>
  <p>Memory Leak Demo</p>
</template>

<script>
import event from '../utils/event.js'
export default {
  name: 'Memory Leak Demo',
  data() {
    return {
      arr: [10, 20, 30], // 数组 对象
    }
  },
  methods: {
    printArr() {
        console.log(this.arr)
    }
  },
  mounted() {
      window.addEventListener('resize', this.printArr)
      // 自定义事件也是这样
      event.on("prt",this.printArr)
  },
  // Vue2 - beforeDestroy
  beforeUnmount() {
      window.removeEventListener('resize', this.printArr)
      event.off("prt",this.printArr)
  },
}
</script>
