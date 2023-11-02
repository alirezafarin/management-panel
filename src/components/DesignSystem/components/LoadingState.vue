<script setup lang="ts">
import CustomSpinner from './CustomSpinner.vue';
</script>

<template>
  <div class="w-100 d-flex justify-content-center align-items-center loading-container">
    <CustomSpinner variant="primary" />
  </div>
</template>

<style scoped lang="scss">
.loading-container {
  height: calc(100vh - $navbar-height);
}
</style>
