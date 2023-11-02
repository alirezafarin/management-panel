<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue';
import type { ISidebarLink } from './model';
defineProps<ISidebarLink>();
</script>

<template>
  <RouterLink class="text-light text-decoration-none" :to="to" v-slot="{ isActive }">
    <CustomBtn :class="['text-left pl-4', { active: isActive }]" block :variant="variant" size="md">
      <slot></slot> </CustomBtn
  ></RouterLink>
</template>

<style scoped lang="scss">
.active {
  background-color: $bg-active-link !important;
  border-color: $bg-active-link !important;
}
</style>
