<template>
  <div class="tab-bar-item" @click="btnClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>

    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#f00'
    }
  },
  data() {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    btnClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    font-size: 12px;
  }

  .tab-bar-item img {
    margin-top: 3px;
    width: 28px;
    height: 28px;
    vertical-align: middle;
  }
</style>