<script setup lang="ts">
import BasePagination from '@/components/Base/components/BasePagination.vue';
import BaseTable from '@/components/Base/components/BaseTable/BaseTable.vue';
import { en } from '@/dictionary/en';
import { useArticleList, usePagination } from './composables';
import { linkGen } from './helper';

const { currentPage } = usePagination();
const { data, isFetching, pagesCount } = useArticleList(currentPage);

const fields = [
  '#',
  {
    key: 'title',
    label: en.articles.title,
    formatter: (value: string) => {
      return `${value.slice(0, 20)} ...`;
    },
  },
  {
    key: 'author',
    label: en.articles.author,
    formatter: (value: any) => {
      return value.username;
    },
  },
  {
    key: 'tagList',
    label: en.articles.tagList,
    formatter: (value: string) => {
      return value;
    },
  },
  {
    key: 'body',
    label: en.articles.body,
    formatter: (value: string) => {
      return `${value.slice(0, 20)} ...`;
    },
  },
  {
    key: 'createdAt',
    label: en.articles.createdAt,
  },
];
</script>

<template>
  <div>
    <h1 class="mb-4">
      {{ en.articles.allPosts }}
    </h1>
    <BaseTable
      :fields="fields"
      :items="data.articles"
      :busy="isFetching"
      :current-page="+currentPage"
    />
    <BasePagination
      class="d-flex justify-content-center mt-2"
      :link-gen="linkGen"
      :number-of-pages="pagesCount"
      v-if="pagesCount"
      v-model="currentPage"
      first-number
      last-number
    />
  </div>
</template>
