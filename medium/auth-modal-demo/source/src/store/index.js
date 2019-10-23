import Vue from "vue";
import Vuex from "vuex";
import AuthModule from "./AuthModule/index";
import CheckoutModule from "./CheckoutModule/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    AuthModule,
    CheckoutModule
  }
});
export default store;