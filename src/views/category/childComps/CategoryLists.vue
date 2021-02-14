<template>
  <div class="CategoryLists">
    <div class="list">
      <scroll class="content" :pull-up-load = "true">
        <div class="cates">
          <div v-for="(item, index) in cates" 
               :key="item.id" 
               @click="cateClick(index)"
               :class="['cate', {active: currentIndex === index}]">{{item.name}}
          </div>
        </div>
      </scroll>
      <scroll class="content1" :pull-up-load = "true" ref="scroll1">
        <div class="goods">
          <div v-for="(item) in goods" :key="item.id" class="goodItems">
            <img v-lazy="item.pic" alt="">
            <p>{{item.name}}</p>
          </div>
        </div>
        <div class="recommend">
          <div class="recommend-top">猜你喜欢</div>
          <goods-list :goods = "recommends"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

export default {
  name: 'CategoryLists',
  components: {
    Scroll,
    GoodsList
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    cates: {
      type: Array,
      default() {
        return []
      }
    },
    goods: {
      type: Array,
      default() {
        return []
      }
    },
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    cateClick(index) {
      this.currentIndex = index
      this.$emit('cateClick', index)
      this.$refs.scroll1.scrollTo(0, 0, 0)
    }
  }
}
</script>

<style scoped>
  .list {
    display: flex;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    width: 72px;
  }

  .content .cates {
    background-color: #f1f1f1;
    text-align: center;
  }

  .cates .cate {
    line-height: 40px;
    color: #666;
  }

  .cates .active {
    font-weight: 700;
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    background-color: #fff;
  }

   .content1 {
     position: absolute;
     top: 44px;
     right: 0;
     bottom: 49px;
     left: 72px;
   }

   .goods {
     padding: 20px 8px;
     display: flex;
     flex-wrap: wrap;
     text-align: center;
   }

   .goodItems {
     width: 33.3%;
     margin-bottom: 20px;
   }

   .goods img {
     width: 56px;
     height: 56px;
   }

   .goods p {
     font-size: 12px;
     color: #333;
   }

  .recommend-top {
    margin-bottom: 8px;
    padding-left: 16px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #eaeaea;
  }

</style>