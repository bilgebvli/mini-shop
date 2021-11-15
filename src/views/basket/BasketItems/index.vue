<template>
  <mini-shop-card class="card mb-3 border-0 shadow-sm" :loading="basketLoader">
    <template slot="header">
      {{ $t('basket.myCard') }} ({{ totalQuantity }})</template
    >
    <template v-for="(basketItem, basketItemIndex) in basket">
      <basket-item
        :key="basketItemIndex"
        class="py-0"
        :basket-item="basketItem"
        :basket-item-index="basketItemIndex"
        @remove-basket-item="removeBasketItem"
        @change-basket-item-quantity="changeBasketItemQuantity"
      ></basket-item>
    </template>
  </mini-shop-card>
</template>

<script>
import BasketItem from './BasketItem';
import basketMixin from './../basketMixin';

export default {
  name: 'BasketItems',
  components: {
    BasketItem,
  },
  mixins: [basketMixin],
  computed: {
    totalQuantity() {
      let totalQuantity = 0;
      for (const item of this.basket) {
        totalQuantity += item.quantity;
      }
      return totalQuantity;
    },
  },
  methods: {
    removeBasketItem({ basket }) {
      this.$emit('update-basket', { basket, url: 'deleteBasket' });
    },
    changeBasketItemQuantity({ basketItemIndex, quantity }) {
      let basket = this.$helpers.deepClone(this.basket);

      basket[basketItemIndex].quantity = quantity;
      this.$emit('update-basket', {
        basket: basket[basketItemIndex],
        url: 'editBasket',
      });
    },
  },
};
</script>
