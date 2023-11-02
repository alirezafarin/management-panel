<script setup lang="ts">
import ArticleForm from './components/ArticleForm.vue';
import { en } from '@/dictionary/en';
</script>

<template>
  <div>
    <h1 class="mb-4">{{ en.articles.newArticle }}</h1>
    <ArticleForm />
  </div>
</template>
