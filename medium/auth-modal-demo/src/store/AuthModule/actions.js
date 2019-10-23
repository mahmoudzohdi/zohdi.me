export default {
  submitLogin({ commit }) {
    return Promise.resolve(true).then(res => {
      commit("UPDATE_USER_LOGIN_STATUS", true);
      return res;
    });
  },
  showAuthModal({ commit }, payload) {
    commit("UPDATE_AUTH_MODAL_VISIBILITY", {
      callbackAction: payload.callbackAction,
      visibility: true
    });
  },
  hideAuthModal({ commit }) {
    commit("", {
      visibility: false,
      callbackAction: {
        name: null,
        paylaod: null
      }
    });
  }
};
