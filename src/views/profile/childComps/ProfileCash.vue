<template>
  <div class="profileCash">
    <div class="cash-item">
      <div class="num"><span>0.00</span>元</div>
      <span class="text">我的余额</span>
    </div>
    <div class="cash-item">
      <div class="num"><span>0</span>个</div>
      <span class="text">我的优惠</span>
    </div>
    <div class="cash-item">
      <div class="num"><span>0</span>分</div>
      <span class="text">我的积分</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCash'
}
</script>

<style scoped>
  .profileCash {
    padding: 18px 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 8px solid rgba(100, 100, 100, .1);
  }

  .cash-item {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .cash-item .num {
    font-size: 14px;
    color: #333;
  }

  .cash-item .num span {
    color: var(--color-high-text);
    font-size: 18px;
  }

   .cash-item .text {
    margin-top: 4px;
    font-size: 14px;
    color: #333;
  }
</style>