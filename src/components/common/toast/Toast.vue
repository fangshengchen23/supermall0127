<template>
  <div id="toast" v-show = "isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast', 
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, delay = 2000) {
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, delay)
    }
  }
}
</script>

<style scoped>
  #toast {
    padding: 10px 12px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 14px;
    background-color: rgba(0,0,0,.6);
    border-radius: 28px;
    z-index: 999;
  }
</style>