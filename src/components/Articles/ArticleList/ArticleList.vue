<script setup lang="ts">
import CustomPagination from '@/components/DesignSystem/components/CustomPagination.vue';
import CustomTable from '@/components/DesignSystem/components/CustomTable.vue';
import { en } from '@/dictionary/en';
import { usePagination } from './composables';

const { linkGen, currentPage } = usePagination();
const items = [
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell 1' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell 2' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' },
  { heading1: 'table cell', heading2: 'table cell', heading3: 'table cell' }
];
</script>

<template>
  <div>
    <h1 class="mb-4">{{ en.articles.allPosts }}</h1>
    <CustomTable with-number :fields="['#', 'heading1', 'heading2', 'heading3']" :items="items" />
    <CustomPagination
      class="d-flex justify-content-center"
      :link-gen="linkGen"
      :number-of-pages="10"
      v-model="currentPage"
      first-number
      last-number
    />
  </div>
</template>
