<template>
  <div class="about">
    <h3>ShopingCart</h3>
    <div class="main">
      <CarList :list="carDataList" :addToBuyList="addToBuy" @test="testMth" />
      <buy-list :buyList="buyList" />
      <div>Total: 元</div>
    </div>
  </div>
</template>

<script>
import BuyList from './shopCart/BuyList'
import CarList from './shopCart/CarList'
export default {
  name: 'ShopCart',
  components: {
    CarList,
    BuyList,
  },
  data() {
    return {
      carDataList: [
        {
          id: 1,
          name: 'toy1',
          price: 12,
        },
        {
          id: 2,
          name: 'toy2',
          price: 33,
        },
        {
          id: 3,
          name: 'toy3',
          price: 22,
        },
      ],
      buyList: [
        {
          id: 1,
          name: 'toy1',
          price: 12,
          vol: 1,
        },
      ],
    }
  },
  methods: {
    addToBuy(e) {
      this.buyList.forEach((item) => {
        if (item.id !== e.id) {
          console.log('--11--', item)
          this.buyList.push({
            ...e,
            vol: 1,
          })
        } else {
          console.log('--22--', item)
          item.vol++
        }
      })
    },
    testMth() {
      console.log('--testMth--')
    },
  },
}
</script>
<style>
.main {
  width: 40%;
  background-color: #fff;
}
</style>
