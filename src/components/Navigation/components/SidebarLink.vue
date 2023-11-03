<script setup lang="ts">
import BaseBtn from '@/components/Base/components/BaseBtn.vue';
import type { ISidebarLink } from './model';
defineProps<ISidebarLink>();
</script>

<template>
  <RouterLink class="text-light text-decoration-none" :to="to" v-slot="{ isActive }">
    <BaseBtn :class="['text-left pl-4', { active: isActive }]" block :variant="variant" size="md">
      <slot></slot> </BaseBtn
  ></RouterLink>
</template>

<style scoped lang="scss">
.active {
  background-color: $bg-active-link !important;
  border-color: $bg-active-link !important;
}
</style>
