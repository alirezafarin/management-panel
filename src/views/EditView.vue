<script setup lang="ts">
import CreateEditArticle from '@/components/Articles/CreateEditArticle/CreateEditArticle.vue';
import { en } from '@/dictionary/en';
</script>

<template>
  <CreateEditArticle :title="en.articles.editArticle" />
</template>
