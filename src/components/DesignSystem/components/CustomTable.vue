<script setup lang="ts">
import TableDropDown from '@/components/Articles/ArticleList/components/TableDropDown.vue';
import type { CustomTableProps } from '../model';

defineProps<CustomTableProps>();
</script>

<template>
  <div class="custom-table-container">
    <b-table
      class="custom-table"
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
            day: 'numeric'
          })
        }}
        <TableDropDown :slug="data.item.slug" />
      </template>
      <template v-if="!items.length" #table-busy>
        <div class="text-center">
          <b-spinner variant="primary" class="align-middle"></b-spinner>
        </div>
      </template>
    </b-table>
  </div>
</template>

<style scoped lang="scss">
.custom-table-container {
  height: 700px;
  min-width: 475;
  overflow: auto;
}

.custom-table {
  width: 100% !important;
  height: 100% !important;
}

.custom-table-loading {
  height: 100% !important;
}
</style>
