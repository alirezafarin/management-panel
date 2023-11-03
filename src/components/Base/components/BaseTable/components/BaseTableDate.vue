<script setup lang="ts">
import TableDropDown from '@/components/Articles/ArticleList/components/TableDropDown.vue';

defineProps<{ date: string; slug: string }>();
</script>

<template>
  <div>
    {{
      new Date(date).toLocaleDateString('en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    }}
    <TableDropDown :slug="slug" />
  </div>
</template>
