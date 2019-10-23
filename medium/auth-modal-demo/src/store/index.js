import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule/index';
import CheckoutModule from './CheckoutModule/index';

Vue.use(Vuex)

export const modules = {
  AuthModule,
  CheckoutModule,
}
