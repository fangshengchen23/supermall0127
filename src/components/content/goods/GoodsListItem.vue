<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-item {
    width: 48%;
  }

  .goods-item img {
    border-radius: 6%;
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    text-align: center;
  }

  .goods-info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .goods-info .price {
    margin-right: 15px;
    color: var(--color-high-text);
  }

  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 1px;
    width: 11px;
    height: 11px;
    background: url("~assets/img/common/collect.svg") 0 0/11px 11px;
  }

</style>