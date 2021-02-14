<template>
  <div id="profile">
    <nav-bar class="nav">
      <div class="title" slot="center">个人中心</div>
    </nav-bar>
    <profile-info />
    <profile-cash />
    <profile-features />
  </div>
</template>
 
<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileInfo from './childComps/ProfileInfo'
import ProfileCash from './childComps/ProfileCash'
import ProfileFeatures from './childComps/ProfileFeatures'

export default {
  name: 'Profile',
  components: {
    NavBar,
    ProfileInfo,
    ProfileCash,
    ProfileFeatures
  }
}
</script>

<style scoped>
  .nav {
    color: #fff;
    background-color: var(--color-tint);
  }

</style>