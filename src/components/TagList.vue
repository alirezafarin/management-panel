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
  <div class="border container rounded pt-3">
    <CustomCheckboxGroup :options="options" v-model="selected" />
  </div>
</template>

<style scoped lang="scss">
.container {
  border-color: $gray-400 !important;
  height: 370px;
}
</style>
