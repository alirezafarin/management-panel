<script setup lang="ts">
import { RouterLink } from 'vue-router';
import CustomBtn from './DesignSystem/components/CustomBtn.vue';

withDefaults(defineProps<{ variant?: string }>(), { variant: 'primary' });
</script>

<template>
  <RouterLink class="text-light text-decoration-none" to="/">
    <CustomBtn block :variant="variant" size="md" class="text-left">
      All Articles
    </CustomBtn></RouterLink
  >
  <RouterLink class="text-light text-decoration-none" :to="{ name: 'createArticle' }">
    <CustomBtn block :variant="variant" size="md" class="text-left">
      New Article
    </CustomBtn></RouterLink
  >
</template>
