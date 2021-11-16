<template>
  <div v-bind="cardOptions">
    <div v-if="loading" v-bind="cardLoaderOptions"></div>
    <div v-if="isHeader" class="card-header bg-white pt-4 border-0">
      <slot name="header"></slot>
    </div>
    <div class="card-body py-0"><slot></slot></div>
    <div v-if="isFooter" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniShopCard',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isHeader() {
      return Boolean(this.$slots['header']);
    },
    isFooter() {
      return Boolean(this.$slots['footer']);
    },
    cardLoaderOptions() {
      return {
        class: {
          [`${this.componentName}__loader`]: true,
          'rounded-top': true,
        },
      };
    },
    cardOptions() {
      return {
        class: {
          card: true,
          [this.componentName]: true,
          [`${this.componentName}--loading`]: this.loading,
        },
      };
    },
  },
};
</script>
