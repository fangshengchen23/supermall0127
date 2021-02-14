<template>
  <div class="checkButton" :class="{active: isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .active {
    background-color: red;
  }

  .checkButton {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1px solid #666;
  }

  .checkButton img{
    width: 100%;
  }
</style>