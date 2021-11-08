<template>
  <div class="d-flex align-items-center justify-content-center flex-column">
    <div class="text-center px-4 my-5">
      <img
        src="~@/assets/images/views/basket/no-basket-items-yet-icon.svg"
        alt="no-basket-items-yet-icon"
        height="150"
      />
      <h3 class="text-uppercase my-4">
        {{ $t('basket.description.noBasketItem') }}
      </h3>
      <mini-shop-button
        :to="{ name: 'products' }"
        bg-color="tangerine"
        text-color="white"
        uppercase
        text-normal
        text-center
        class="mt-3 rounded-xs"
      >
        {{ $t('general.shopping.start') }}
      </mini-shop-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasketNoItemsCard',
};
</script>
