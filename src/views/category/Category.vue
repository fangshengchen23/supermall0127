<template>
  <div id="category">
    <nav-bar class="nav">
      <div class="title" slot="center">分类列表</div>
    </nav-bar>
    <category-lists :cates = "cates" 
                    :goods = "goods" 
                    :recommends = "recommends" 
                    @cateClick = "cateClick"/>  
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CategoryLists from './childComps/CategoryLists'
import { fetchCates, fetchCateItems, getRecommend } from 'network/category.js'

export default {
  name: 'Category',
  data() {
    return {
      currentIndex: 0,
      cates: [],
      goods: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    CategoryLists
  },
  created() {
    this.fetchCates()
    // 请求推荐信息
    getRecommend().then( res => {
      this.recommends = res.data.list
    })
  },
  methods: {
    cateClick(index) {
      this.currentIndex = index
      this.fetchCateItems()
    },
    fetchCates() {
      fetchCates().then(res => {
        this.cates = res.data
        this.fetchCateItems()
      })
    },
    fetchCateItems() {
      this.goods = []
      fetchCateItems(this.cates[this.currentIndex].id).then(res => {
        // console.log(res.data);
        this.goods = res.data
      })
    }
  }
}
</script>

<style scoped>
  .nav {
    position: relative;
    z-index: 10;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>