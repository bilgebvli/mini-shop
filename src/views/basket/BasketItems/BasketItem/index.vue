<template>
  <div :key="`basket-item-${basketItemIndex}`">
    <hr />
    <div class="row">
      <div class="col-lg-3">
        <img
          :src="basketItem.image"
          class="card-img img-fluid"
          :alt="basketItem.image"
        />
      </div>
      <div class="col-lg-9">
        <div class="card-body">
          <h5 class="card-title">{{ basketItem.name }}</h5>
          <p class="card-text">{{ $n(basketItem.price, "currency") }}</p>
        </div>
      </div>
    </div>
    <div class="row my-lg-4">
      <div class="col-lg-3">
        <mini-shop-counter
          v-model="basketItem.quantity"
          class="m-auto"
          :min="1"
          :max="100"
          @change="changeBasketItemQuantity($event)"
        ></mini-shop-counter>
      </div>
      <div class="col-lg-6">
        <p
          class="card-text px-4 py-4 py-lg-1 cursor-pointer"
          @click="removeBasketItem"
        >
          Remove
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BasketItem",
  props: {
    basketItem: {
      type: Object,
    },
    basketItemIndex: {
      type: [Number, String],
      default: 0,
    },
  },
  methods: {
    removeBasketItem() {
      this.$emit("remove-basket-item", { basket: this.basketItem });
    },
    changeBasketItemQuantity(quantity) {
      this.$emit("change-basket-item-quantity", {
        basketItemIndex: this.basketItemIndex,
        quantity,
      });
    },
  },
};
</script>
