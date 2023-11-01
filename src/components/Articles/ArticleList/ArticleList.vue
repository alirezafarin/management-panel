<script setup lang="ts">
import CustomPagination from '@/components/DesignSystem/components/CustomPagination.vue';
import CustomTable from '@/components/DesignSystem/components/CustomTable.vue';
import { en } from '@/dictionary/en';
import { useArticleList, usePagination } from './composables';

const { linkGen, currentPage } = usePagination();
const { data, isFetching } = useArticleList(currentPage);
</script>

<template>
  <div>
    <h1 class="mb-4">
      {{ en.articles.allPosts }}
    </h1>
    <CustomTable
      with-number
      :fields="['#', 'title', 'author', 'tagList', 'body', 'createdAt']"
      :items="data.articles"
      :busy="isFetching"
    />
    <CustomPagination
      class="d-flex justify-content-center mt-2"
      :link-gen="linkGen"
      :number-of-pages="10"
      v-model="currentPage"
      first-number
      last-number
    />
  </div>
</template>
