<template>
  <div class="container">
    <mini-shop-page-loader class="container-lg py-4" :value="loader">
      <div class="row">
        <product-list
          v-for="(productItem, index) in products"
          :key="index"
          :product-item="productItem"
        ></product-list></div
    ></mini-shop-page-loader>
  </div>
</template>

<script>
import ProductList from './ProductList';

export default {
  name: 'Products',
  components: {
    ProductList,
  },
  computed: {
    products() {
      return this.$store.getters['products/getProducts'];
    },
  },
  async created() {
    await this.init();
  },
  methods: {
    async init() {
      try {
        this.loader = true;
        await this.$store.dispatch('products/fetchProducts');
        this.$store.dispatch('basket/fetchBasket');
      } finally {
        this.loader = false;
      }
    },
  },
};
</script>

<style></style>
