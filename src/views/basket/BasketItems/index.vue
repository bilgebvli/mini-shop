<template>
  <mini-shop-card class="card mb-3 border-0 shadow-sm" :loading="basketLoader">
    <template slot="header">
      {{ $t('basket.myCard') }} ({{ totalQuantity }})</template
    >
    <template v-for="(basketItem, basketItemIndex) in basket">
      <basket-item
        class="py-0"
        :key="basketItemIndex"
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
  mixins: [basketMixin],
  components: {
    BasketItem,
  },
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
