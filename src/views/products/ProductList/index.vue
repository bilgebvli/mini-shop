<template>
  <div class="col-12 col-lg-4">
    <mini-shop-card class="mb-3 p-4 border">
      <product-item-card :product-item="productItem"></product-item-card>
    </mini-shop-card>
  </div>
</template>

<script>
import ProductItemCard from './ProductItemCard';

export default {
  name: 'ProductList',
  components: {
    ProductItemCard,
  },
  props: {
    productItem: {
      type: Object,
    },
  },
};
</script>
