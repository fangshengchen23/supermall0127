<template>
  <div class="bottom-nav">
    <div class="nav-left">
      <div class="left-item">
        <img src="~assets/img/detail/service.svg" alt="">
        <span>客服</span>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/shop.svg" alt="">
        <span>店铺</span>
      </div>
      <div class="left-item">
        <img src="~assets/img/detail/collect.svg" alt="">
        <span>收藏</span>
      </div>
    </div>
    <div class="nav-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .bottom-nav {
    height: 49px;
    width: 100%;
    background-color: #fff;

    display: flex;
  }
  .nav-left, .nav-right {
    flex: 1;
  }

  .nav-left {
    padding-top: 5px;
    display: flex;
    justify-content: space-around;
  }

  .nav-left img {
    display: block;
    width: 22px;
    height: 22px;
  }

  .nav-right {
    display: flex;
  }

  .cart, .buy {
    flex: 1;
  }

  .nav-right .cart, .nav-right .buy {
    padding-top: 18px;
    color: #333;
    font-size: 14px;
    text-align: center;
    background-color:  #ffe817;
  }

   .nav-right .buy {
    color: #fff;
    background-color: #f69;
  }
</style>