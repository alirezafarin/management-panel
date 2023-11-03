<script setup lang="ts">
defineProps<{ show?: boolean }>();
</script>

<template>
  <b-overlay class="base-overlay" spinner-variant="primary" :show="show" rounded="sm"
    ><slot></slot
  ></b-overlay>
</template>

<style scoped lang="scss">
.base-overlay {
  height: calc(100vh - $navbar-height);
}
</style>
