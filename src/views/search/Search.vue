<template>
  <div class="search">
    <div class="search-top">
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
    <div class="content">
      <h2>历史记录</h2>
      <div class="history">
        <div class="history-item" v-for="his in histories" :key="his">
          {{his}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      searchText: '',
      histories: sessionStorage.getItem('his') ? JSON.parse(sessionStorage.getItem('his')) : []
    }
  },
  created() {
    console.log(11);
  },
  methods: {
    onSearch() {
      // 存历史记录
      // 先取  转换为数组 往数组中添加一个然后再转换为字符串存回去
      let his = sessionStorage.getItem('his') ? JSON.parse(sessionStorage.getItem('his')) : []
      if (this.searchText !== '') {
        his.unshift(this.searchText)
        // 去重后存入
        his = [...new Set(his)]
        if (his.length >= 8) {
          his.length = 8
        }
        sessionStorage.setItem('his', JSON.stringify(his))
      }
      this.$router.push({
        path: '/searchResult',
        query: {
          key: this.searchText
        }
      })
    }
  }
}
</script>

<style scoped>
  .search-top {
    display: flex;
    border-bottom: 1px solid rgba(100, 100, 100, .2);
    position: relative;
  }

  .icon-fanhui {
    position: absolute;
    top: 7px;
    left: 4px;
    font-size: 24px;
    color: #999;
  }

  .van-search {
    flex: 1;
    padding: 6px 0 6px 30px;
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
    padding: 20px 12px;
  }

  .history {
    padding: 0 2px 0 3px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: #000;
  }

  .history-item {
    line-height: 26px;
    font-size: 14px;
    color: #333;
    padding: 0 6px;
    margin: 10px 13px 0 0;
    background-color: #f1f1f1;
  }
</style>