<template>
  <div id="app">
    <keep-alive exclude="Detail,Search">
      <router-view :key="$route.fullPath"/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import './assets/css/base.css';
</style>
