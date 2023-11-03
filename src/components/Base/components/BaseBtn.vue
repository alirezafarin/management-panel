<script setup lang="ts">
import BaseSpinner from './BaseSpinner.vue';

defineProps<{ isLoading?: boolean; disabled?: boolean; click?: any }>();
</script>

<template>
  <b-button @click="click" :disabled="isLoading || disabled"
    ><slot>Submit</slot>
    <BaseSpinner class="ml-2" v-if="isLoading" small />
  </b-button>
</template>
