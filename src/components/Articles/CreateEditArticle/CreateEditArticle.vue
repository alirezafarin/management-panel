<script setup lang="ts">
import ArticleForm from './components/ArticleForm.vue';
import { en } from '@/dictionary/en';

withDefaults(defineProps<{ title: string }>(), { title: en.articles.newArticle });
</script>

<template>
  <div>
    <h1 class="mb-4">{{ title }}</h1>
    <ArticleForm />
  </div>
</template>
