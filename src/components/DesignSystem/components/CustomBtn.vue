<script setup lang="ts">
defineProps<{ isLoading?: boolean; disabled?: boolean }>();
</script>

<template>
  <b-button :disabled="isLoading || disabled"
    ><slot>Submit</slot>
    <b-spinner class="ml-2" v-if="isLoading" small></b-spinner>
  </b-button>
</template>
