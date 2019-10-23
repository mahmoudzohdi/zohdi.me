export default {
  UPDATE_CART_DATA(state, payload){
    state.cart = state.cart.concat(payload);
  },
  UPDATE_WISH_LIST_DATA(state, payload){
    state.wisthList = state.wisthList.concat(payload);
  },
}
