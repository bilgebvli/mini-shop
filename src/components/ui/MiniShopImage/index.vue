<template>
  <img v-bind="imageOptions" />
</template>

<script>
export default {
  name: 'MiniShopImage',
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    loading: {
      type: String,
      default: 'eager',
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
  },
  computed: {
    imageOptions() {
      return {
        src: this.src,
        alt: this.alt,
        loading: this.loading,
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>
