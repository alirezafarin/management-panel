<script setup lang="ts">
import CreateEditArticle from '@/components/Articles/CreateEditArticle/CreateEditArticle.vue';
import { useEditArticle } from '@/components/Articles/CreateEditArticle/composables';
import LoadingState from '@/components/LoadingState.vue';
import { en } from '@/dictionary/en';

const { isFetching } = useEditArticle();
</script>

<template>
  <LoadingState v-if="isFetching" />
  <CreateEditArticle v-else :title="en.articles.editArticle" />
</template>
