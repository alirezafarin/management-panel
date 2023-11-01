<script setup lang="ts">
withDefaults(defineProps<{ title: string; titleClass?: string }>(), {
  titleClass: 'text-capitalize'
});
</script>

<template>
  <div class="form-box-container">
    <div class="form-box-content rounded px-3">
      <h1 :class="['form-box-title text-secondary text-center mt-4 mb-4', titleClass]">
        {{ title }}
      </h1>
      <slot></slot>
      <div class="mt-2">
        <slot name="link"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-box-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-box-content {
  background-color: $bg-form-box;
  max-width: $form-box-width;
  width: 100%;
}

.form-box-title {
  font-size: 47px;
  line-height: 1.19;
}
</style>
