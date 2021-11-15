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
    lazy: {
      type: Boolean,
      default: false,
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
        lazy: this.lazy,
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>
