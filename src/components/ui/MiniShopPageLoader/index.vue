<template>
  <div>
    <div v-if="value" :class="{ 'container-lg': !noContainer }">
      <template>
        <content-loader height="650" width="900">
          <rect x="30" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="20" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="250" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="275" rx="0" ry="0" width="120" height="20" />
          <rect x="30" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="30" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="30" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="250" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="250" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="250" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="470" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="470" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="470" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="690" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="690" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="690" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="910" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="910" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="910" y="595" rx="0" ry="0" width="120" height="20" />
          <rect x="1130" y="340" rx="8" ry="8" width="200" height="200" />
          <rect x="1130" y="570" rx="0" ry="0" width="200" height="18" />
          <rect x="1130" y="595" rx="0" ry="0" width="120" height="20" />
        </content-loader>
      </template>
    </div>
    <transition :name="transition">
      <div v-if="showContent">
        <slot v-bind="{ show: showContent }"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "MiniShopLoader",
  components: {
    ContentLoader,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    hideContent: {
      type: Boolean,
      default: false,
    },
    transition: {
      type: String,
      default: null,
    },
    noContainer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showContent() {
      return !this.hideContent || (this.hideContent && !this.value);
    },
  },
};
</script>
