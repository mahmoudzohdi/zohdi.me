export default {
  addProductToCart({ commit, dispatch, rootState }, payload) {
    // payload: {
    //   imageUrl: '',
    //   name: ''
    // }
    if (!rootState.AuthModule.loggedInUser) { // if user not logged in
      dispatch( // show auth-modal with callbackAction (name, payload)
        "AuthModule/showAuthModal",
        {
          callbackAction: {
            name: "CheckoutModule/addProductToCart",
            payload
          }
        },
        { root: true }
      );
      return Promise.resolve();
    }
    return Promise.resolve(payload).then(res => { // fake API call
      commit("UPDATE_CART_DATA", payload);
      return res;
    });
  },
  addProductToWishList({ commit, dispatch, rootState }, payload) {
    // payload: {
    //   imageUrl: '',
    //   name: ''
    // }
    if (!rootState.AuthModule.loggedInUser) { // if user not logged in
      dispatch( // show auth-modal with callbackAction (name, payload)
        "AuthModule/showAuthModal",
        {
          callbackAction: {
            name: "CheckoutModule/addProductToWishList",
            payload
          }
        },
        { root: true }
      );
      return Promise.resolve();
    }
    return Promise.resolve(payload).then(res => { // fake API call
      commit("UPDATE_WISH_LIST_DATA", payload);
      return res;
    });
  },
};
