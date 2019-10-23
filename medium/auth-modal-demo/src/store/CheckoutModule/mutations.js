export default {
  UPDATE_CART_DATA(state, payload){
    state.cart = state.cart.concat(payload);
  },
}
