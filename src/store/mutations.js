import {ADD_TO_CART, ADD_CART_COUNT} from './mutation-types'

export default {
  [ADD_TO_CART](state, payload) {
    payload.check = true
    state.cartList.push(payload)
  },
  [ADD_CART_COUNT](state, payload) {
    payload.count++
  },
  change_cart_info(state, payload) {
    state.cartInfo = payload
  }
}