<script setup lang="ts">
import BaseSpinner from '../BaseSpinner.vue';
import BaseTableDate from './components/BaseTableDate.vue';
import type { BaseTableProps } from './model';

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
      <template v-if="withNumber" #cell(#)="data">{{ data.index + 1 }} </template>
      <template #cell(name)="data">
        {{ data.value }}
      </template>
      <template #cell(createdAt)="data">
        <BaseTableDate :date="data.value" :slug="data.item.slug" />
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
