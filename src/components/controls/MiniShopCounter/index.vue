<template>
  <div>
    <div :class="componentName">
      <button
        :class="`${componentName}__button`"
        :disabled="disabledDecrementButton"
        @click="decrement"
      >
        <i class="bi bi-plus"></i>
      </button>
      <input
        type="number"
        :class="`${componentName}__input`"
        :value="number"
        disabled
      />
      <button
        :class="`${componentName}__button`"
        :disabled="disabledIncrementButton"
        @click="increment"
      >
        <i class="bi bi-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniShopCounter',
  props: {
    value: {
      type: [Number, String],
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    number: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
        this.$emit('change', value);
      },
    },
    disabledDecrementButton() {
      return this.disabled || this.number - 1 < this.min;
    },
    disabledIncrementButton() {
      return this.disabled || this.number + 1 > this.max;
    },
  },
  methods: {
    decrement() {
      this.number = this.number - 1;
    },
    increment() {
      this.number = this.number + 1;
    },
  },
};
</script>
