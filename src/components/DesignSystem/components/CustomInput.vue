<script setup lang="ts">
import { type ICustomInputProps } from '@/components/DesignSystem/model';

withDefaults(defineProps<ICustomInputProps>(), { feedbackMsg: '', state: null, value: '' });
</script>

<template>
  <b-form-group :label="label" :label-for="name">
    <b-form-input
      :value="value"
      @input="$emit('input', $event)"
      :state="state"
      v-bind="$attrs"
    ></b-form-input>
    <b-form-invalid-feedback> {{ feedbackMsg }} </b-form-invalid-feedback>
  </b-form-group>
</template>
