<template>
  <div>
    <mini-shop-image
      :src="productItem.image"
      :alt="productItem.name"
      class="card-img mb-4"
    ></mini-shop-image>
    <h5 class="card-title">{{ productItem.name }}</h5>
    <p class="d-inline mr-2">{{ $n(productItem.price, 'currency') }}</p>
    <mini-shop-button
      bg-color="tangerine"
      text-color="white"
      text-normal
      class="d-inline-block px-3 py-2 rounded-xs"
      @click="addBasket"
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
    async addBasket() {
      try {
        this.showAppLoading();
        let url = null,
          quantity = 0;
        const productItem = this.productItem,
          product = this.getBasketItem({
            productId: productItem.productId,
          });

        if (this.basket.length && product) {
          url = 'editBasket';
          quantity = product.quantity += 1;
        } else {
          url = 'addBasket';
          quantity = 1;
        }

        await this.$store.dispatch(`basket/${url}`, {
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
