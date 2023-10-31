<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
  <RouterView name="navigation" />
  <RouterView class="main-route p-4" name="main" />
</template>

<style lang="scss">
.main-route {
  margin-left: 0;
}

@include media-breakpoint-up(md) {
  .main-route {
    margin-left: 250px;
  }
}
</style>
