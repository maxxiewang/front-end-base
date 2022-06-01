<template>
  <div>
    <ul class="buyList">
      <li v-for="item in buyList" :key="item.id">
        {{ item.name }} &nbsp;&nbsp;数量 {{ item.vol }}
        &nbsp;&nbsp;
        <a href="javascript:void(0)" class="taga" @click="add(item)">miuns</a>
        &nbsp;&nbsp;
        <a href="javascript:void(0)" class="taga" @click="add(item)">add</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BuyList',
  props: {
    buyList: Array,
  },
  mounted() {
    // console.log('--list--', this.buyList)
  },
  methods: {
    add(e) {
      console.log('--addCart--', e)
    },
  },
}
</script>
<style scoped>
.buyList {
  background-color: cornsilk;
  padding: 10px;
  border-bottom: 2px solid;
}
.taga {
  float: right;
  padding-right: 5%;
}
</style>
