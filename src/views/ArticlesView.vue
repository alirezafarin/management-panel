<script setup lang="ts">
import CustomPagination from '@/components/DesignSystem/components/CustomPagination.vue'
import CustomTable from '@/components/DesignSystem/components/CustomTable.vue'

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
]
</script>

<template>
  <div>
    <h1 class="mb-4">All Posts</h1>
    <CustomTable with-number :fields="['#', 'heading1', 'heading2', 'heading3']" :items="items" />
    <CustomPagination class="d-flex justify-content-center" first-number last-number />
  </div>
</template>
