<template>
  <div v-if = "Object.keys(shops).length !== 0" class="shops">
    <div class="shop-top">
      <img :src="shops.shopLogo" alt="">
      <span>{{shops.shopName}}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-left">
        <div class="middle-left-item">
          <span class="count">{{shops.sells}}</span>
          <span class="text">总销售</span>
        </div>
        <div class="middle-left-item">
          <span class="count">{{shops.goods}}</span>
          <span class="text">全部宝贝</span>
        </div>
      </div>
      <div class="middle-right">
        <table>
          <tr v-for="(item, index) in shops.score" :key="index">
            <td class="name">{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'score-better': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <a>进店逛逛</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shops: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .shops {
    padding: 18px 6px 0 6px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }

  .shop-top img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid rgba(80, 28, 28, 0.1);
    vertical-align: middle;
  }

  .shop-top span {
    margin-left: 10px;
    font-size: 14px;
  }

  .shop-middle {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }

  .middle-left, .middle-right {
    flex: 1;
  }

  .middle-left {
    display: flex;
    justify-content: space-around;
    text-align: center;

    border-right: 1px solid rgba(100,100,100,.1);
  }

  .middle-left-item span{
    display: block;
  }

  .middle-left-item .count {
    font-size: 14px;
    color: #333;
  } 

  .middle-left-item .text {
    margin-top: 5px;
    font-size: 12px;
    color: #333;
  } 

  .middle-right {
    font-size: 13px;
    color: #333333;
  }
  .middle-right table{
    width: 120px;
    margin-left: 20px;
  }

  .middle-right table td {
    padding: 5px 0;
  }

  .middle-right .score {
    color: #5ea732;
  }

  .middle-right .better {
    color: #5ea732;
  }

  .middle-right .score-better {
    color: #f13e3a;
  }

  .shop-bottom {
    margin-top: 15px;
    padding-bottom: 16px;
    text-align: center;
    color: #333;
  }

  .shop-bottom a{
    padding: 5px 26px;
    text-align: center;
    background-color: rgba(100, 100, 100, .1);
    border-radius: 16px;
  }
</style>