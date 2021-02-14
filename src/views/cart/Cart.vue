<template>
  <div id="cart">
    <nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <scroll class="content" :pull-up-load = "true" ref="scroll">
      <div v-if = "cartList.length !== 0">
        <cart-list />
      </div>
      <div v-else class="empty">
        <img src="~assets/img/cart/kong.jpeg">
        <p>{{cartInfo.pText}}</p>
        <button @click="toLogin">{{cartInfo.btnText}}</button>
      </div>
    </scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childsComps/CartList'
import CartBottomBar from './childsComps/CartBottomBar'

import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength']),
    ...mapState({
      cartList: state => state.cartList,
      cartInfo: state => state.cartInfo
    })
  },
  activated() {
    this.$refs.scroll.refresh()
    this.changeCartInfo()
  },
  methods: {
    ...mapMutations(['change_cart_info']),
    toLogin () {
      this.$router.push(this.cartInfo.toGo)
    },
    changeCartInfo() {
      const token = sessionStorage.token
      if (token) {
        const cartInfo = {}
        cartInfo.pText = '购物车还是空的哦~';
        cartInfo.btnText = '去逛逛';
        cartInfo.toGo = '/home'
        this.change_cart_info(cartInfo)
      }
    }
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
  }

  .cart-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: relative;
    z-index: 10;
  }

  .content {
  /*   position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */

    height: calc(100% - 49px - 44px - 34px);
    /* overflow: hidden; */
  }
  .empty {
    padding-top: 70px;
    text-align: center;
  }
  .empty img{
    width: 60%;
  }

  .empty p {
    margin: 15px 0 10px 10px;
    font-size: 14px;
    color: #000;
  }

  .empty button {
    padding: 4px 10px;
    font-size: 16px;
    color: #fff;
    background-color: #f46;
    border: none;
    border-radius: 3px;
  }

</style>