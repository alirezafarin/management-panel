<script setup lang="ts">
import { en } from '@/dictionary/en';
</script>

<template>
  <div class="sidebar pt-2">
    <h4>
      <slot name="title">
        <p class="text-light px-3">{{ en.articles.post }}</p>
      </slot>
    </h4>
    <slot name="content"></slot>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: $navbar-height;
  bottom: 0;
  background-color: $primary;
  width: $sidebar-width;
}
</style>
