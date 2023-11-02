<script setup lang="ts">
import { RouterView } from 'vue-router';
import CustomModal from './components/DesignSystem/components/CustomModal.vue';
import { useModal } from './components/DesignSystem/composables';

useModal();
</script>

<template>
  <RouterView />
  <RouterView name="navigation" />
  <RouterView class="main-route p-4" name="main" />
  <CustomModal />
</template>

<style lang="scss">
.main-route {
  margin-left: 0;
  margin-top: $navbar-height;
}

@include media-breakpoint-up(md) {
  .main-route {
    margin-left: $sidebar-width;
    margin-top: $navbar-height;
  }
}
</style>
