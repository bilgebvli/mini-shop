<template>
  <mini-shop-page-loader
    type="products"
    class="container-lg py-4"
    :value="loader"
    hide-content
  >
    <div class="container rounded">
      <div class="row" v-if="basket.length">
        <div class="col-lg-9">
          <basket-items
            v-if="basket.length"
            :basket="basket"
            :basket-loader="basketLoader"
            @update-basket="updateBasket"
          ></basket-items>
        </div>
        <div class="col-lg-3">
          <basket-action-buttons :basket="basket"></basket-action-buttons>
        </div>
      </div>
      <basket-no-items-card v-else></basket-no-items-card>
    </div>
  </mini-shop-page-loader>
</template>

<script>
import BasketItems from "./BasketItems";
import BasketActionButtons from "./BasketActionButtons";
import BasketNoItemsCard from "./BasketNoItemsCard";

export default {
  name: "Basket",
  components: {
    BasketItems,
    BasketNoItemsCard,
    BasketActionButtons,
  },
  data() {
    return {
      basketLoader: false,
    };
  },
  computed: {
    basket() {
      return this.$store.getters["basket/getBasket"];
    },
  },
  async created() {
    try {
      this.loader = true;
      await this.getBasket();
    } catch (e) {
      this.notification({
        title: this.errorHandler(e),
        type: "error",
      });
    } finally {
      this.loader = false;
    }
  },
  methods: {
    async getBasket() {
      await this.$store.dispatch("basket/fetchBasket");
    },
    async updateBasket({ basket, url }) {
      this.basketLoader = true;
      try {
        await this.$store.dispatch(`basket/${url}`, {
          productId: basket.id,
          ...(url === "editBasket" ? { basket } : null),
        });
        await this.getBasket();
      } catch (e) {
        this.notification({
          title: this.errorHandler(e),
          type: "error",
        });
      } finally {
        this.basketLoader = false;
      }
    },
  },
};
</script>

<style></style>
