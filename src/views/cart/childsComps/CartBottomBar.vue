<template>
  <div class="bottom-bar">
    <div class="check-button">
      <check-button :is-check ="isSelectAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="bottom-center">
      <span>合计：{{totalPrice}}</span>
    </div>
    <div class="bottom-right" @click="countClick">
      去结算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartList']),
    // 判断全选、不全选
    isSelectAll() {
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.check)
    },
    // 计算总金额
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
        return item.check
      }).reduce((preValue, item) => {
        return item.count * item.price + preValue
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => {
        return item.check
      }).length
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) { // 若全选
        this.cartList.forEach(item => item.check = false);
      } else { // 若不全选
        this.cartList.forEach(item => item.check = true);
      }
    },
    countClick() {
      if(this.cartList.every(item => !item.check)) {
        this.$toast.show('请选择物品')
      }else {
        this.$toast.show('正在结算中...')
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 34px;
    position: relative;
    bottom: 0px;
    background-color: #eee;
  }

  .check-button {
    position: absolute;
    top: 10px;
    left: 8px;
    display: flex;
  }

  .check-button span {
    margin-left: 6px;
    font-size: 12px;
    color: #333;
  }

  .bottom-center {
    position: absolute;
    top: 8px;
    left: 78px;

    font-size: 14px;
    color: #333;
  }

  .bottom-right {
    position: absolute;
    right: 0;
    padding-top: 8px;

    height: 100%;
    width: 100px;
    font-size: 14px;
    color: #fff;
    text-align: center;
    background-color: orangered;
  }
</style>