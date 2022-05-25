<template>
  <div>
    <!-- 例如：vue 颜色选择 -->
    <!-- @input="$emit('change1', $event.target.value)" -->
    <input type="text" :value="text1" @input="handleInput" />
    <span>{{ text1 }}</span>
    <!--
        1. 上面的 input 使用了 :value 而不是 v-model
        2. 上面的 change1 和 model.event1 要对应起来
        3. text1 属性对应起来
    -->
  </div>
</template>

<script>
export default {
  model: {
    prop: 'text1', // 对应 props text1
    event: 'change1',
  },
  props: {
    text1: String,
    default() {
      return ''
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('change1', e.target.value)
    },
  },
}
</script>
