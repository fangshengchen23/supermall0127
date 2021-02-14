<template>
  <div id = "detail">
    <detail-nav-bar class="detail-nav" @titleClick = "titleClick" ref="navBar"/>
    <scroll class="content" 
            :pull-up-load = "true" 
            ref="scroll"
            :probe-type = "3"
            @scroll = "contentScroll"> 
      <detail-swiper :topImages = "topImages" />
      <detail-base-info :goods = "goods"/>
      <detail-shop-info :shops = "shops"/>
      <detail-goods-info :detailInfo = "detailInfo" @imgLoad = "imageLoad"/>
      <detail-param-info ref = "param" :goodsParam = "goodsParam" />
      <detail-comment ref="comment" :comment = "comment" />
      <goods-list  ref="recommend" :goods = "recommends"/>
    </scroll>
    <detail-bottom-bar class="bottom-nav" @addCart = "addToCart" />
    <back-top @click.native="backTop" v-show = "isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailComment from './childComps/DetailComment'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {getDetail, getRecommend, Goods, Shops, GoodsParam} from 'network/detail'
import {itemListenerMixin, isShowBackTopMixin} from 'common/mixin'

import {mapActions} from 'vuex'

export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      detailInfo: {},
      goodsParam: {},
      comment: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin, isShowBackTopMixin],
  created() {
    this.iid = this.$route.params.iid
    // 请求商品的各类信息
    getDetail(this.iid).then(res => {
      // console.log(res)
      let data = res.result
      this.topImages = data.itemInfo.topImages

      // 请求商品基本信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 请求商店信息
      this.shops = new Shops(data.shopInfo)

      // 请求商品图片穿着信息
      this.detailInfo = data.detailInfo

      // 请求商品参数信息
      this.goodsParam = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 请求用户评论信息
      if (data.rate.list) {
        this.comment = data.rate.list[0]
      }
    })

    // 请求推荐信息
    getRecommend().then( res => {
      // console.log(res);
      this.recommends = res.data.list
    })
  },
  destroyed() {
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
  methods: {
    ...mapActions(['addCart']),
    // 内部goodsInfo图片加载完成
    imageLoad() {
      this.$refs.scroll.refresh()     
      //将nav导航栏的标题的offsetTop值push到themeTopYs
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs);
    },
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 400)
    },
    contentScroll(position) {
      // console.log(position);
      const positionY = -position.y;
      for(let i = 0; i < this.themeTopYs.length; i++) {
        if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.navBar.currentIndex = this.currentIndex
        }
      }
      // 监听backTop组件的显示隐藏
      this.showBackTop(position)
    },
    addToCart() {
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.detailInfo.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 调用 ...mapActions(['addCart'])
      if(sessionStorage.token) {
        this.addCart(product).then(res => {
          this.$toast.show(res, 2000)
        })
      }else {
        this.$toast.show('您还未登录')
      }
    
      /* this.$store.dispatch('addCart', product).then(res => {
        console.log(res);
      }) */
    }
  }  
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 10;
    height: 100vh;
    background-color: #fff;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background: #fff;
  }

  .content {
  /*   position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
    height: calc(100% - 49px - 44px);
    overflow: hidden;
  }

  .bottom-nav {
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>