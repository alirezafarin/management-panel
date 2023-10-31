<script setup lang="ts"></script>

<template>
  <div class="sidebar px-3 pt-2">
    <h4>
      <slot name="title"> <p class="text-light">Post</p> </slot>
    </h4>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.sidebar {
  top: 56px;
  height: calc(100vh - 56px);
  background-color: var(--primary);
  width: 250px;
  position: absolute;
}
</style>
