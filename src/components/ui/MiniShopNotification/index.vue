<template>
  <notifications class="cursor-pointer" v-bind="notificationOptions" />
</template>
<script>
export default {
  name: 'MiniShopNotification',
  props: {
    group: {
      type: String,
      default: 'general',
    },
  },
  computed: {
    notificationOptions() {
      return {
        group: this.group,
        position: 'top right',
        width: 350,
        classes: 'vue-notification mt-lg-4 p-3',
        closeOnClick: true,
      };
    },
  },
};
</script>
