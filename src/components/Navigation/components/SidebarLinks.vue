<script setup lang="ts">
import { en } from '@/dictionary/en';
import SidebarLink from './SidebarLink.vue';

withDefaults(defineProps<{ variant?: string }>(), { variant: 'primary' });

const links = [
  { id: 0, content: en.articles.allArticles, to: { name: 'home' } },
  { id: 1, content: en.articles.newArticle, to: { name: 'createArticle' } }
];
</script>

<template>
  <SidebarLink v-for="link in links" :key="link.id" :to="link.to" :variant="variant">
    {{ link.content }}</SidebarLink
  >
</template>
