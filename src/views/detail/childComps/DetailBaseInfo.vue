<template>
  <div v-if = "Object.keys(goods).length !== 0" class="goods">
    <h4 class="title">{{goods.title}}</h4>
    <div class="goodInfo">
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="desc">{{goods.desc}}</span>
    </div>
    <div class="columns">
      <div class="columns-item" v-for="(item, index) in goods.columns" :key = "index">{{item}}</div>
    </div>
    <div class="services">
      <div v-for="index in goods.services.length - 1" :key = "index">
        <img class="icon" :src="goods.services[index-1].icon" alt="">
        <span class="name">{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .goods {
    padding: 12px 6px 0 6px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }

  .title {
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }

  .goodInfo {
    margin-top: 12px;
  }

  .goodInfo .price {
    font-size: 18px;
    color: var(--color-high-text);
  }

  .goodInfo .oldPrice {
    margin-left: 8px;
    font-size: 12px;
    color: #999;
    text-decoration: line-through;
  }

  .goodInfo .desc {
    padding: 2px;
    color: #fff;
    font-size: 12px;
    background-color: var(--color-high-text);
    border-radius: 6px;

    position: relative;
    top: -8px;
    left: 2px
  }

  .columns {
    margin-top: 14px;
    padding-bottom: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    border-bottom: 1px solid rgba(80, 28, 28, 0.1);
  }

  .services {
    padding: 14px 0;
    display: flex;
    justify-content: space-between;
    color: #333;
    font-size: 10px;
  }

  .services img {
    height: 15px;
    width: 15px;
    vertical-align: middle;
  }
</style>