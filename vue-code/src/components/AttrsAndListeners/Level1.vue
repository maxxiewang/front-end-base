<template>
    <p @click="changeInfo">Level1</p>
    <Level2
        :a="a"
        :b="b"
        :c="c"
        @getA="getA" 
        @getB="getB"
        @getC="getC"
    ></Level2>
</template>

<script>
// import { computed } from '@vue/runtime-core'
import Level2 from './Level2'

export default {
    name: 'Level1',
    components: { Level2 },
    data() {
        return {
            a: 'aaa',
            b: 'bbb',
            c: 'ccc',
            name:'aavv'
        }
    },
    // provide:{ 
    //   info:'infoA.'
    // },
    // provide(){
    //   return {
    //     info:computed(()=>{
    //       this.name.value
    //     })
    //   }
    // },
    methods: {
        getA() {
            return this.a
        },
        getB() {
            return this.b
        },
        getC() {
            return this.c
        },
        changeInfo(){
          console.log('changeInfo',this.a)
        }
    }
}
</script>