import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import user from './user'

import createPersistedState from 'vuex-persistedstate'

const state = {
  cartList: [],
  cartInfo: {
    pText: '你还没有登录哦~~~',
    btnText: '去登陆',
    toGo: '/profile'
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    user
  },
  plugins: [
    createPersistedState({
      storage: sessionStorage
    })
  ]
})

export default store