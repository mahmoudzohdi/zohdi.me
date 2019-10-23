export default {
  UPDATE_USER_LOGIN_STATUS(state, status) {
    state.loggedInUser = status;
  },
  UPDATE_AUTH_MODAL_VISIBILITY(state, authModal) {
    state.authModal.visibility = authModal.visibility;
    const { name, payload } = authModal.callbackAction;
    state.authModal.callbackAction = { name, payload };
  },
};
