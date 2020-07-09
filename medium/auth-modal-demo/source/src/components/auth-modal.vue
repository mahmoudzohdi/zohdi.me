<template>
  <b-modal id="auth-modal" hide-footer title="Login First" @hidden="hideAuthModal">
    <login-form @success="success"></login-form>
  </b-modal>
</template>

<script>
import LoginForm from './login-form';
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("AuthModule");
export default {
  name: 'auth-modal',
  components: {
    LoginForm
  },
  computed: {
    ...mapState({
      visibility: state => state.authModal.visibility,
      callbackAction: state => state.authModal.callbackAction
    })
  },
  watch: {
    visibility(newVal) {
      newVal
        ? this.$bvModal.show("auth-modal")
        : this.$bvModal.hide("auth-modal");
    }
  },
  methods: {
    ...mapActions(["hideAuthModal"]),
    callback() {
      this.$store.dispatch(
        this.callbackAction.name,
        this.callbackAction.payload
      );
    },
    success() {
      this.callback();
      this.hideAuthModal();
    }
  }
};
</script>
