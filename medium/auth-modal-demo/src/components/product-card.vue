<template>
  <b-card
    :title="item.name"
    :img-src="item.imageUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>

    <b-button variant="primary" @click="callAddProductToCart(item)">Add to cart</b-button>
  </b-card>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('CheckoutModule');
export default {
  name: "product-card",
  props: ["item"],
  methods: {
    ...mapActions(['addProductToCart']),
    callAddProductToCart(item){
      this.addProductToCart(item);
    }
  },
};
</script>