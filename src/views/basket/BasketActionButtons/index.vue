<template>
  <div class="card mb-3 border-0 shadow-sm p-4">
    <mini-shop-button
      :to="{ name: 'products' }"
      class="rounded-xs"
      bg-color="tangerine"
      text-color="white"
      block
      uppercase
      text-normal
      text-center
      v-text="`<  Continiuse Shopping`"
    >
    </mini-shop-button>
    <mini-shop-button
      bg-color="grey"
      text-color="black"
      class="rounded-xs mt-3"
      block
      uppercase
      text-normal
      @click="placeOrder"
    >
      Place Order
    </mini-shop-button>
  </div>
</template>

<script>
export default {
  name: "BasketActionButtons",
  props: {
    basket: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    async placeOrder() {
      try {
        this.showAppLoading();
        const basket = this.basket.map((item) => ({
          id: item.productId,
          amount: Number(item.price),
        }));
        await this.$store.dispatch("checkout/placeOrder", { basket });
        this.notification({
          title: "Succesfully",
          type: "success",
        });
        // this.$store.dispatch("basket/updateBasket", { basket: [] });
        this.$store.commit("basket/setBasket", { basket: [] });
        // this.getBasket();
      } catch (e) {
        this.notification({
          title: this.errorHandler(e),
          type: "error",
        });
      } finally {
        this.hideAppLoading();
      }
    },
  },
};
</script>
