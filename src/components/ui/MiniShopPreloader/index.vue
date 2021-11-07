<template>
  <div class="pre-loader">
    <div class="loader">
      <img
        src="~@/assets/images/general/loading.svg"
        alt="loading"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniShopPreloader",
  props: {
    transparent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
