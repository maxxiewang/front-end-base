<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }} - {{ item.price }}元 &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="javascript:void(0)" class="taga" @click="addToCart(item)"
          >add Cart</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CarList',
  props: {
    list: Array,
    addToBuyList: Function,
  },
  mounted() {
    // console.log('--list--', this.list)
  },
  methods: {
    addToCart(e) {
      // console.log('--addCart--', e)
      // this.$emit('addToBuyList', e)
      this.addToBuyList(e)
    },
  },
}
</script>
<style scoped>
li {
  background-color: orange;
  padding: 10px;
  border-bottom: 2px solid;
}
.taga {
  float: right;
  padding-right: 5%;
}
</style>
