<template>
  <div class="nav">
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item" v-for="(item,index) in titles" :key="index" @click="titleClick(index)" :class="{active: currentIndex === index}">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style scoped>
  .active {
    color: var(--color-high-text);
  }

  .back img{
    margin-top: 4px;
    margin-right: 4px;
    height: 35px;
    width: 35px;
  }

  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    font-size: 12px
  }
</style>