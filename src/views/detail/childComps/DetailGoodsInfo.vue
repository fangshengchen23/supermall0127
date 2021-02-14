<template>
  <div v-if = "Object.keys(detailInfo).length !== 0" class="goodsInfo">
    <div class="info-desc">
      <div class="star"></div>
      <p class="desc">{{detailInfo.desc}}</p>
      <div class="end"></div>
    </div>
    <div class="key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="img" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  data() {
    return {
      imageLength: 0,
      counter: 0
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imageLength) {
        this.$emit('imgLoad')
      }
    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length;
    }
  }
}
</script>

<style scoped>
  .goodsInfo {
    padding: 18px 8px 0 6px;
    border-bottom: 3px solid rgba(100,100,100,.1);
  }

  .desc {
    padding: 8px 0;
    color: #333;
  }

  .star, .end {
    position: relative;
    float: right;
    width: 120px;
    height: 1px;
    background-color: #333;
  }

  .star {
    float: left;
  }

  .star::before, .end::after {
    content: '';
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
  }

  .end::after {
    right: 0;
  }

  .key {
    margin-top: 15px;
    font-size: 14px;
    color: #000;
  }

  .img img {
    width: 100%;
  }
</style>