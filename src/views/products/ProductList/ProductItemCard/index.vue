<template>
  <div>
    <img
      :src="productItem.image"
      :alt="productItem.image"
      class="card-img-top img-fluid mb-4"
    />
    <h5 class="card-title">{{ productItem.name }}</h5>
    <p class="d-inline mr-2">{{ $n(productItem.price, 'currency') }}</p>
    <mini-shop-button
      bg-color="tangerine"
      text-color="white"
      uppercase
      text-normal
      class="d-inline-block px-3 py-2 rounded-xs"
      @click="addBasket(productItem)"
    >
      {{ $t('products.add') }}
    </mini-shop-button>
  </div>
</template>
<script>
export default {
  name: 'ProductItemCard',
  props: {
    productItem: {
      type: Object,
    },
  },
  computed: {
    basket() {
      return this.$store.getters['basket/getBasket'] || [];
    },
  },
  methods: {
    async addBasket(productItem) {
      try {
        this.showAppLoading();
        let apiUrl = null;
        let quantity = 0;

        const product = this.getBasketItem({
          productId: productItem.productId,
        });

        if (this.basket.length && product) {
          apiUrl = 'editBasket';
          quantity = product.quantity += 1;
        } else {
          apiUrl = 'addBasket';
          quantity = 1;
        }

        await this.$store.dispatch(`basket/${apiUrl}`, {
          basket: {
            ...productItem,
            quantity,
          },
          ...(product && { productId: product.id }),
        });

        this.$router.push({ name: 'basket' });
      } catch (e) {
        this.notification({
          title: this.errorHandler(e),
          type: 'error',
        });
      } finally {
        this.hideAppLoading();
      }
    },
    getBasketItem({ productId }) {
      return this.basket.find((value) => value.productId == productId) || null;
    },
  },
};
</script>
