<template>
  <div class="cart-item">
    <div class="check-button"  @click="checkClick">
      <check-button :is-check = "itemInfo.check"/>
    </div>
    <div class="item-img">
      <img :src="itemInfo.img" alt="">
    </div>
    <div class="item-info">
      <h4 class="title">{{itemInfo.title}}</h4>
      <p class="desc">{{itemInfo.desc}}</p>
      <div class="info-bottom">
        <span class="price">￥{{itemInfo.price}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo : {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    checkClick() {
      this.itemInfo.check = !this.itemInfo.check
    }
  }
}
</script>

<style scoped>
  .cart-item {
    position: relative;
    padding: 8px 8px 8px 0;
    overflow: hidden;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .check-button {
    position: absolute;
    left: 6px;
    top: 44px;
  }

  .item-img {
    float: left;
    margin: 0 10px 0 24px;
  }

  .item-img img{
    width: 74px;
    height: 92px; 
    border-radius: 8px;
    vertical-align: middle;
  }

  .item-info .title {
    font-weight: 400;
    font-size: 14px;
    color: #000;
  }

  .item-info .desc {
    margin-top: 14px;
    font-size: 12px;
    color: #333;
  }

  .item-info .title, .item-info .desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .info-bottom {
    margin-top: 24px;
  }

  .info-bottom .price {
    float: left;
    font-size: 16px;
    color: orangered;
  }

  .info-bottom .count {
    float: right;
    font-size: 14px;
  }

</style>