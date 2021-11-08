<template>
  <div id="app">
    <mini-shop-preloader v-if="isAppLoading"></mini-shop-preloader>
    <mini-shop-notification></mini-shop-notification>
    <router-view />
  </div>
</template>

<script>
import MiniShopPreloader from '@/components/ui/MiniShopPreloader';

export default {
  name: 'App',
  components: {
    MiniShopPreloader,
  },
  computed: {
    isAppLoading() {
      return this.$store.getters.getIsAppLoading;
    },
  },
};
</script>
