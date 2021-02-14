<template>
  <div class="profileInfo">
    <div class="info-img">
      <img src="~assets/img/profile/headphoto.jpg" alt="">
    </div>
    <div class="info-user">
      <h4 class="name">{{userInfo.userName}}</h4>
      <p class="text">这个人很懒，还未写任何东西！！！</p>
      <div class="edit"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ProfileInfo',
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  }
}
</script>

<style scoped>
  .profileInfo {
    height: 105px;
    padding-right: 20px;
    display: flex;
    background-color: var(--color-tint);
    border-top: 1px solid rgba(100, 100, 100, .2);

    position: relative;
  }

  .info-img {
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px;
    width: 75px;
    height: 75px; 
  }

  .info-img img {
    width: 100%;
    border-radius: 50%; 
  }

  .info-user {
    margin-left: 105px;
    margin-top: 32px;
    color: #fff
  }

  .info-user .name {
    font-size: 18px;
  } 

  .info-user .text {
    margin-top: 14px;
    width: 192px; 

    white-space: nowrap; 
    overflow: hidden;
    text-overflow:ellipsis;
  }

  .info-user .edit {
    width: 15px;
    height: 15px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotate(-45deg);

    position: absolute;
    right: 16px;
    top: 44px;
  }

</style>