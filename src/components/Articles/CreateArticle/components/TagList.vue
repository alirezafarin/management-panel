<script setup lang="ts">
import CustomCheckboxGroup from '@/components/DesignSystem/components/CustomCheckboxGroup.vue'
import { ref } from 'vue'
const options = [
  { text: 'Orange', value: 'orange' },
  { text: 'Apple', value: 'apple' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Grape', value: 'grape' }
]
const selected = ref([])
</script>

<template>
  <div class="border tag-list rounded p-3">
    <CustomCheckboxGroup :options="options" v-model="selected" />
  </div>
</template>

<style scoped lang="scss">
.tag-list {
  border-color: $gray-400 !important;
  height: 370px;
}
</style>
