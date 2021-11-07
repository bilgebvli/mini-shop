<template>
  <div :class="{ [componentName]: true, card: true }">
    <div v-if="loading" v-bind="cardLoaderOptions"></div>
    <div class="card-header bg-white pt-4 border-0" v-if="header">
      <slot name="header"></slot>
    </div>
    <div class="card-body py-0"><slot></slot></div>
    <div class="card-footer" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniShopCard",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    header() {
      return !!this.$slots["header"];
    },
    footer() {
      return !!this.$slots["footer"];
    },
    cardLoaderOptions() {
      return {
        class: {
          [`${this.componentName}__loader`]: true,
          "rounded-top": true,
        },
      };
    },
  },
};
</script>
