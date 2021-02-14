<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key = 'index' :class="{active: currentIndex == index}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .active {
    color: var(--color-high-text);
  }

  .active span {
    padding: 6px;
    border-bottom: 3px solid var(--color-high-text)
  }

  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    position: sticky;
    top: 44px;
  }
  .tab-control-item {
    flex: 1
  }

</style>