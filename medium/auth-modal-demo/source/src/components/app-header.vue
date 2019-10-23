<template>
  <b-navbar class="justify-content-between" type="dark" variant="dark">
    <b-navbar-brand href="#">Online Shop</b-navbar-brand>
    <div>
      <b-button class="repo-link" variant="light" href="https://github.com/mahmoudzohdi/zohdi/tree/gh-pages/medium/auth-modal-demo/source" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </b-button>
      <b-dropdown class="dropdown-container" variant="light" right>
        <template v-slot:button-content>
          <b-button variant="transparent">
            <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            <span class="cart-count">
              {{ cartLength }}
            </span>
          </b-button>
        </template>
          <b-card
            no-body
            border-variant="transparent"
            class="cart-item overflow-hidden"
            v-for="(item, index) in cart"
            :key="index"
          >
            <b-row no-gutters class="align-items-center">
              <b-col md="4">
                <b-card-img :src="`https://picsum.photos/100/100/?image=${index}`" class="product-image rounded-0"></b-card-img>
              </b-col>
              <b-col md="8">
                <b-card-body :title="item.name"></b-card-body>
              </b-col>
            </b-row>
          </b-card>
      </b-dropdown>
    </div>
  </b-navbar>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('CheckoutModule');
export default {
  name: "app-header",
  computed: {
    ...mapState(['cart']),
    cartLength(){
      return this.cart.length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.repo-link{
  margin-right: 10px;
  font-size: 22px;
}
.dropdown-menu{
  padding: 15px;
}
.cart-item{
  width: 300px;
  .product-image{
    height: 100%;
  }
  .card-body{
    padding: 15px;
    .card-title{
      margin-bottom: 0;
      font-size: 20px;
    }
  }
}
</style>
