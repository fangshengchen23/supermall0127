<template>
  <div id="home">
    <home-nav class="home-nav"/>
    <tab-control :titles="['流行', '新款', '热销']" ref="tabControl2" @tabClick = 'tabClick' class="home-tab-control" v-show="isTabFixed"/>
    <scroll class="content" 
            ref="scroll" 
            :probe-type = "3" 
            @scroll="contentScroll"
            :pull-up-load = "true"
            @pullingUp = "loadMore">
      <home-swiper :banners = banners @swiperImgLoad="swiperImgLoad" />
      <home-recommend :recommends = recommends></home-recommend>
      <home-feature />
      <tab-control :titles="['流行', '新款', '热销']" ref="tabControl1" @tabClick = 'tabClick'/>
      <goods-list :goods = 'showGoods'/>
    </scroll>
    <back-top @click.native="backTop" v-show = "isShowBackTop"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import HomeNav from './childComps/HomeNav'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'

import {getHomeMultidata, getHomeGoods} from 'network/home';
import {itemListenerMixin, isShowBackTopMixin} from 'common/mixin'
export default {
  name: 'Home',
  components: {
    Scroll,
    TabControl,
    GoodsList,
    HomeNav,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  mixins: [itemListenerMixin, isShowBackTopMixin],
  created() {
    // 请求轮播图、推荐数据
    this.getHomeMultidata()

    // 请求商品信息数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },  
  activated() {
    // 进入离开时位置
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
  }, 
  deactivated() {
    // 离开时记录位置
    this.saveY = this.$refs.scroll.getScrollY()
    // 离开时销毁图片加载完成刷新
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  methods: {
    /* 
    事件监听中的方法
    */

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
      this.$refs.tabControl2.currentIndex = index
      this.$refs.tabControl1.currentIndex = index
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
    // 轮播图中图片加载完成打印tabControl的offsetTop
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    },
    /* 
    网络请求中的方法
    */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res.data);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
     })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res.data.list);
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
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .home-tab-control {
    position: relative;
    z-index: 9;
  }
  /* 方法一： */
  /* .content {
    height: calc(100% - 49px);
  } */

  /* 方法二 */
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>