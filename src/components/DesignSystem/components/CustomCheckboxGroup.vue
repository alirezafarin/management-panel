<script setup lang="ts">
defineProps<{ value?: any[]; options: any[] }>()
</script>

<template>
  <b-form-group>
    <b-form-checkbox-group
      :value="value"
      @input="$emit('input', $event)"
      :options="options"
      v-bind="$attrs"
      stacked
    ></b-form-checkbox-group>
  </b-form-group>
</template>
