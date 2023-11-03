<script setup lang="ts">
import type { BaseFormProps } from '../model';

defineEmits<BaseFormProps>();
</script>

<template>
  <b-form @submit.prevent="$emit('submit')"><slot></slot></b-form>
</template>
