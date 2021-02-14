<template>
  <div class="recommend">
    <div class="recommend-item"  v-for="(item, index) in recommends" :key = "index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    padding: 6px 0 12px 0;
    text-align: center;
    font-size: 12px;
    border-bottom: 5px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    padding-bottom: 6px;
    width: 68px;
  }
</style>