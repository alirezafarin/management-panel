<script setup lang="ts">
import type { IBaseDropDownProps } from '../model';

withDefaults(defineProps<IBaseDropDownProps>(), { text: '...' });
</script>

<template>
  <b-dropdown :text="text">
    <template v-for="option in options" :key="option.id">
      <b-dropdown-divider v-if="option.text === 'divider'"></b-dropdown-divider>
      <b-dropdown-item @click="option.onClick" v-else>{{ option.text }}</b-dropdown-item>
    </template>
  </b-dropdown>
</template>
