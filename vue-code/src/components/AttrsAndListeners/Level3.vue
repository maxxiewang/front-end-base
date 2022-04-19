<template>
    <p @click="showC">Level3</p>

    <HelloWorld :msg="msg" ref="hello1"/>
</template>

<script>
import HelloWorld from '../HelloWorld'

export default {
    name: 'Level3',
    components: { HelloWorld },
    props: ['x'],
    emits: ['getX'],
    inheritAttrs: false,
    data() {
        return {
          msg:"hello LV22223"
        }
    },
    methods: {
      showC(){
        this.$refs.hello1.showMsg()
      }
    },
    created() {
        // console.log('level3', Object.keys(this.$attrs)) // 是 props 和 emits 后补
    },
    mounted() {
      //! $parent 或是 $refs，只能在mounted获取，created获取不到
        // console.log(this.$parent.getX())
        console.log(this.$refs.hello1.name)
    },
}
</script>