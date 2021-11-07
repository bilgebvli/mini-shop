<template>
  <router-link v-if="isRoute" :to="to" v-bind="buttonOptions">
    <slot></slot>
  </router-link>
  <button v-else v-bind="buttonOptions" @click.prevent="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MiniShopButton",
  props: {
    bgColor: {
      type: String,
    },
    textColor: {
      type: String,
    },
    block: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: false,
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    textLeft: {
      type: Boolean,
      default: false,
    },
    textRight: {
      type: Boolean,
      default: false,
    },
    textCenter: {
      type: Boolean,
      default: true,
    },
    textNormal: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [Object, String, Array],
      default: null,
    },
  },
  computed: {
    isRoute() {
      return !!this.to;
    },
    buttonOptions() {
      return {
        class: {
          [this.componentName]: true,
          [`${this.componentName}--block`]: this.block,
          [`${this.componentName}--flat`]: this.flat,
          [`${this.componentName}--uppercase`]: this.uppercase,
          [`${this.componentName}--text-left`]: this.textLeft,
          [`${this.componentName}--text-right`]: this.textRight,
          [`${this.componentName}--text-center`]: this.textCenter,
          [`${this.componentName}--text-normal`]: this.textNormal,
          [`${this.componentName}--route`]: this.isRoute,
          [`bg-${this.bgColor}`]: true,
          [`text-${this.textColor}`]: true,
        },
        disabled: this.disabled,
      };
    },
  },
};
</script>
