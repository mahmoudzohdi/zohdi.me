<template>
  <div id="app">
    <auth-modal></auth-modal>
    <app-header msg="Welcome to Your Vue.js App"></app-header>
    <b-container>
      <b-row>
        <b-col cols="4" v-for="(n, index) in new Array(15)" :key="index">
          <product-card
            :item="{
              imageUrl: `https://picsum.photos/600/300/?image=${index}`,
              name: `product ${index}`
            }"
          ></product-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";
import ProductCard from "./components/product-card.vue";
import AuthModal from "./components/auth-modal.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    ProductCard,
    AuthModal
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
