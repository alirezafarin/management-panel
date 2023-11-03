<script setup lang="ts">
import { type IBaseInputProps } from '@/components/Base/model';

withDefaults(defineProps<IBaseInputProps>(), { feedbackMsg: '', state: null, value: '' });
</script>

<template>
  <b-form-group :label="label" :label-for="name">
    <b-form-textarea
      :value="value"
      @input="$emit('input', $event)"
      :state="state"
      v-bind="$attrs"
    ></b-form-textarea>
    <b-form-invalid-feedback> {{ feedbackMsg }} </b-form-invalid-feedback>
  </b-form-group>
</template>
