<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Email address:">
        <b-form-input type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>
      <b-form-group label="password:">
        <b-form-input type="password" required placeholder="Enter password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <br/>
      <br/>
      <b-alert show>enter any email & password, it's a fake login step</b-alert>
    </b-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("AuthModule");
export default {
  name: "login-form",
  methods: {
    ...mapActions(["submitLogin"]),
    onSubmit() {
      this.submitLogin().then(() => {
        this.$emit("success");
      });
    }
  }
};
</script>