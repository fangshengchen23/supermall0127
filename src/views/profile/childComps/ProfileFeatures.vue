<template>
  <div class="profileFeatures">
    <ul>
      <li class="feature-item"><span class="iconfont icon-xiaoxi" />我的消息</li>
      <li class="feature-item"><span class="iconfont icon-jifen" />积分商城</li>
      <li class="feature-item"><span class="iconfont icon-huiyuan" />会员卡</li>
      <li class="feature-item" @click="$router.push('/cart')"><span class="iconfont icon-gouwuche-copy" />我的购物车</li>
      <li class="feature-item"><span class="iconfont icon-baobao" />下载购物app</li>
    </ul> 
  </div>
</template>

<script>
export default {
  name: 'ProfileFeatures'
}
</script>

<style scoped>
  .feature-item {
    padding: 10px 0 10px 10px;
    color: #000;
    font-size: 16px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .feature-item span {
    color: var(--color-high-text);
    margin-right: 10px;
  }

</style>