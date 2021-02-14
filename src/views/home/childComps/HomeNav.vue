<template>
  <div class="nav">
    <nav-bar>
      <span slot="left" class="iconfont icon-fenlei" @click="$router.push('/category')"></span>
      <input slot="center" class="nav-center" type="text" placeholder="新款时尚" @click="$router.push('/search')">
      <span slot="right" class="iconfont icon-xiaoxi1"></span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'HomeNav',
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .nav {
    background-color: var(--color-tint);
    color: #fff;
  }

  .icon-fenlei {
    font-size: 30px;
  }

  .icon-xiaoxi1 {
    font-size: 22px;
  }

  .nav-center {
    padding-top: 1px;
    padding-left: 14px;
    width: 100%;
    height: 24px;
    font-size: 13px;
    background-color: #eee;
    border: none;
    border-radius: 4px;
  }

</style>