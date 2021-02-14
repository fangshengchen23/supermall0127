import { debounce } from './utils'
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      // console.log('我是混入');
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
  }
}

export const isShowBackTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 返回按钮返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    showBackTop(position) {
      // 监听backTop组件的显示隐藏
      this.isShowBackTop = -(position.y) >1000
    }
  }
}