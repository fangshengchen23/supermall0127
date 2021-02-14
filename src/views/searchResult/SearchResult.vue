<template>
  <div id="searchResult">
    <div class="searchResult-top">
      <div class="searchResult-nav">
        <span class="iconfont icon-fanhui" @click="$router.go(-1)"></span>
        <van-search
          v-model="searchText"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">搜索</div>
          </template>
        </van-search>
      </div>
      <tab-control :titles="['流行', '新款', '热销']" @tabClick = 'tabClick'/>
    </div>
    <scroll class="content" 
            ref="scroll" 
            :probe-type = "3" 
            @scroll="contentScroll"
            :pull-up-load = "true"
            @pullingUp = "loadMore">   
      <goods-list :goods = 'showGoods'/>
    </scroll>
    <back-top @click.native="backTop" v-show = "isShowBackTop"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import {getHomeGoods} from 'network/home';
import {itemListenerMixin, isShowBackTopMixin} from 'common/mixin'
export default {
  name: 'SearchResult',
  components: {
    Scroll,
    TabControl,
    GoodsList
  },
  data() {
    return {
      searchText: '',
      goods: {
        'pop': {page: 6, list: []},
        'new': {page: 6, list: []},
        'sell': {page: 6, list: []}
      },
      currentType: 'pop'
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mixins: [itemListenerMixin, isShowBackTopMixin],
  created() {
    // 请求商品信息数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    this.searchText = this.$route.query.key 
  }, 
  methods: {
    /* 
    事件监听中的方法
    */
    onSearch() {
      console.log(this.searchText);
    },

    // 判断商品数据类型
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    },
    // 滚动高度判断返回按钮显隐
    contentScroll(position) {
      // 监听backTop组件的显示隐藏
      this.showBackTop(position)

      // 监听tabControl的吸顶
      this.isTabFixed = -(position.y) > this.tabOffsetTop
    },
    // 下拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    /* 
    网络请求中的方法
    */
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 告诉下拉请求完成
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #searchResult {
    height: 100vh;
    position: relative;
  }

  .searchResult-top {
    position: relative;
    z-index: 9;
  }

  .searchResult-nav {
    display: flex;
    position: relative;
  }

  .icon-fanhui {
    font-size: 24px;
    color: #999;

    position: absolute;
    top: 7px;
    left: 4px;
  }

  .van-search {
    padding: 6px 0 0 30px;
    flex: 1;
  }

  .van-search__content {
    margin-left: 4px;
    border-radius: 8px;
  }

  .van-search__label {
    line-height: 26px;
  }
  
  .van-search .van-cell {
    padding: 2px 4px;
    font-size: 13px;
  } 

  .content {
    position: absolute;
    top: 80px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>