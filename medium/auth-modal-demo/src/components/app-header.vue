<template>
  <b-navbar class="justify-content-between" type="dark" variant="dark">
    <b-navbar-brand href="#">Online Shop</b-navbar-brand>

    <b-dropdown class="dropdown-container" variant="light" right>
      <template v-slot:button-content>
        <b-button variant="transparent">
          <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
          <span class="cart-count">
            5
          </span>
        </b-button>
      </template>
        <b-card no-body border-variant="transparent" class="cart-item overflow-hidden">
          <b-row no-gutters class="align-items-center">
            <b-col md="4">
              <b-card-img src="https://picsum.photos/100/100/?image=20" class="product-image rounded-0"></b-card-img>
            </b-col>
            <b-col md="8">
              <b-card-body title="Horizontal Card">
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
    </b-dropdown>
  </b-navbar>
</template>

<script>
export default {
  name: "app-header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
