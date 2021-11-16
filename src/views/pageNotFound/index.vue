<template>
  <transition name="fade">
    <div class="d-flex align-items-center h-v-100 text-center">
      <div class="container">
        <h1 class="display-1">404</h1>
        <p class="lead mb-0">{{ $t('errors.pageNotFound') }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>
