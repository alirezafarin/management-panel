<script setup lang="ts">
import type { CustomTableProps } from '../types'
import CustomDropDown from './CustomDropDown.vue'

defineProps<CustomTableProps>()

const options = [
  { id: 1, text: 'edit' },
  { id: 0, text: 'divider' },
  { id: 0, text: 'delete' }
]
</script>

<template>
  <b-table :fields="fields" :items="items" head-variant="light">
    <template v-if="withNumber" #cell(#)="data">
      {{ data.index + 1 }}
    </template>
    <template #cell(heading3)="data">
      {{ data.value }}
      <CustomDropDown variant="dark-blue" :options="options" />
    </template>
  </b-table>
</template>

<style scoped lang="scss"></style>
