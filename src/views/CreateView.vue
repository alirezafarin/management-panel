<script setup lang="ts">
import CreateEditArticle from '@/components/Articles/CreateEditArticle/CreateEditArticle.vue';
import { useCreateArticle } from '@/components/Articles/CreateEditArticle/composables';

useCreateArticle();
</script>

<template>
  <CreateEditArticle />
</template>
