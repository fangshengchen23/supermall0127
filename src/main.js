import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import Toast from 'components/common/toast'

import "lib-flexible/flexible.js"
import FastClick from 'fastclick'
import 'assets/font/iconfont.css'
import { Form, Field, Button, Search } from 'vant'

// 设置事件总线$bus
Vue.prototype.$bus = new Vue()

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 图片懒加载
Vue.use(Toast)
  .use(VueLazyLoad, {
	  loading: require('assets/img/common/placeholder.gif')
  }).use(Form)
  .use(Field)
  .use(Button)
  .use(Search)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
