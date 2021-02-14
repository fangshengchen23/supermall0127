<template>
  <div id="login">
    <nav-bar class="nav">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">登录界面</div>
    </nav-bar>
    <van-form @submit="onSubmit" class="loginForm">
      <van-field
        v-model="userInfo.userName"
        name="用户名"
        label="账号"
        placeholder="账号"
        :rules="[{ pattern: /\d{6,12}/, message: '请输入6到12位数字' }]"
      />
      <van-field
        v-model="userInfo.pwd"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button color="#ff5777" round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { mapMutations } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      userInfo: {
        userName: '',
        pwd: ''
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    onSubmit(data) {
      // console.log(data);
      // console.log(this.userInfo);
      setTimeout(() => {
        // 请求成功
        const userInfo = this.userInfo
        const token = 'fdsfgegwgaergff'
        this.set_userInfo(userInfo)
        this.set_token(token)
        sessionStorage.setItem('token', token)
        
        if (this.$route.params.from) {
          // 路由拦截重定向
          this.$router.push(this.$route.params.from)
        } else {
          this.$router.push('/home')
        }
        /* 别忘了退出登录时，除了 清除vuex中的用户信息数据，还有手动清除缓存中的数据 */

      }, 2000)
    },
    ...mapMutations('user', ['set_userInfo', 'set_token'])
  }
}
</script>

<style scoped>
  .nav {
    border-bottom: 1px solid rgba(100, 100, 100, 0.2);
  }

  .back img{
    margin-top: 4px;
    margin-right: 4px;
    height: 35px;
    width: 35px;
  }

  .title {
    font-size: 16px;
    color: rgba(100, 100, 100, 1);
  }

  .loginForm {
    margin-top: 50px;
    padding: 0 15px;
  }

</style>