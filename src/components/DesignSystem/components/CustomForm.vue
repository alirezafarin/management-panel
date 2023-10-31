<script setup lang="ts">
import type { CustomFormProps } from '../types'

defineEmits<CustomFormProps>()
</script>

<template>
  <b-form @submit.prevent="$emit('submit')"><slot></slot></b-form>
</template>
