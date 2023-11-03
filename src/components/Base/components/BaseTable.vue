<script setup lang="ts">
import TableDropDown from '@/components/Articles/ArticleList/components/TableDropDown.vue';
import type { BaseTableProps } from '../model';
import BaseSpinner from './BaseSpinner.vue';

defineProps<BaseTableProps>();
</script>

<template>
  <div class="base-table-container">
    <b-table
      class="base-table"
      v-bind="$attrs"
      :fields="fields"
      :items="items"
      head-variant="light"
    >
      <template v-if="withNumber" #cell(#)="data">
        {{ data.index + 1 }}
      </template>
      <template #cell(title)="data"> {{ data.value.slice(0, 20) }} ... </template>
      <template #cell(author)="data"> {{ data.value.username }} </template>
      <template #cell(tagList)="data">
        {{ data.value }}
      </template>
      <template #cell(body)="data"> {{ data.value.slice(0, 20) }} ... </template>
      <template #cell(createdAt)="data">
        {{
          new Date(data.value).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
        <TableDropDown :slug="data.item.slug" />
      </template>
      <template #table-busy>
        <div class="text-center">
          <BaseSpinner variant="primary" class="align-middle" />
        </div>
      </template>
    </b-table>
  </div>
</template>

<style scoped lang="scss">
.base-table-container {
  height: 700px;
  min-width: 475;
  overflow: auto;
}

.base-table {
  width: 100% !important;
  height: 100% !important;
}

.base-table-loading {
  height: 100% !important;
}
</style>
