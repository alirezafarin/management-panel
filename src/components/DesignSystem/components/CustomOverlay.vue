<script setup lang="ts">
defineProps<{ show?: boolean }>();
</script>

<template>
  <b-overlay class="custom-overlay" spinner-variant="primary" :show="show" rounded="sm"
    ><slot></slot
  ></b-overlay>
</template>

<style scoped lang="scss">
.custom-overlay {
  height: calc(100vh - $navbar-height);
}
</style>
