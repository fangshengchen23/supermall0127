export default {
  namespaced: true,
  state: {
    userInfo: {

    },
    token: ''
  },
  mutations: {
    set_userInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    set_token(state, token) {
      state.token = token
    }
  }
}