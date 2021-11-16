<template>
  <div class="card mb-3 border-0 shadow-sm p-4">
    <mini-shop-button
      :to="{ name: 'products' }"
      class="rounded-xs"
      bg-color="tangerine"
      text-color="white"
      block
      text-normal
      v-text="`<  ${$t('general.shopping.continue')}`"
    >
    </mini-shop-button>
    <mini-shop-button
      :disabled="basketLoader"
      bg-color="grey"
      text-color="black"
      class="rounded-xs mt-3"
      block
      text-normal
      @click="placeOrder"
    >
      {{ $t('basket.placeOrder') }}
    </mini-shop-button>
  </div>
</template>

<script>
import basketMixin from './../basketMixin';

export default {
  name: 'BasketActionButtons',
  mixins: [basketMixin],
  methods: {
    async placeOrder() {
      try {
        this.showAppLoading();
        const basket = this.setBasket();
        await this.$store.dispatch('checkout/placeOrder', { basket });

        // Mock api'nin toplu silme işlemi olmadığı için bu methodu ekledim
        await this.deleteAllBaketItems();

        await this.fetchBasket();
        this.notification({
          title: this.$t('general.orderCompleted'),
          type: 'success',
        });
      } catch (e) {
        this.notification({
          title: this.errorHandler(e),
          type: 'error',
        });
      } finally {
        this.hideAppLoading();
      }
    },
    setBasket() {
      return this.basket.map((item) => ({
        id: item.productId,
        amount: Number(item.price),
      }));
    },
    async deleteAllBaketItems() {
      for (const item of this.basket) {
        await this.$store.dispatch('basket/deleteBasket', {
          productId: item.id,
        });
      }
    },
  },
};
</script>
