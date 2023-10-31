<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="form-container px-3">
    <h1 class="title text-uppercase mt-4 mb-4">{{ title }}</h1>
    <slot></slot>
    <div class="mt-2">
      <slot name="link"></slot>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #eceeef;
  width: 100%;
  max-width: 450px;
  border-radius: 4px;
}

.title {
  font-family: HelveticaNeue;
  font-size: 47px;
  line-height: 1.19;
  color: #707070;
  text-align: center;
}
</style>
