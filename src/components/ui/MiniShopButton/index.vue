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
  name: 'MiniShopButton',
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
    disabled: {
      type: Boolean,
      default: false,
    },
    textAlign: {
      type: String,
      default: 'center',
    },
    textTransform: {
      type: String,
      default: 'uppercase',
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
      return Boolean(this.to);
    },
    buttonOptions() {
      return {
        class: {
          [this.componentName]: true,
          [`${this.componentName}--text-normal`]: this.textNormal,
          [`${this.componentName}--route`]: this.isRoute,
          [`${this.componentName}--disabled`]: this.disabled,
          [`bg-${this.bgColor}`]: true,
          [`text-${this.textColor}`]: true,
          [`text-${this.textAlign}`]: true,
          [`text-${this.textTransform}`]: true,
          'btn-block': this.block,
          'rounded-0': this.flat,
        },
        disabled: this.disabled,
      };
    },
  },
};
</script>
