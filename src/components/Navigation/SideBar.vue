<script setup lang="ts"></script>

<template>
  <div class="sidebar px-3 pt-2">
    <h4>
      <slot name="title"> <p class="text-light">Post</p> </slot>
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
