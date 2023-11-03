<script setup lang="ts">
import { inject } from 'vue';
import { formInjectionKey, type IArticleFormInject } from '../composables';
import TagList from './TagList.vue';
import BaseInput from '@/components/Base/components/BaseInput.vue';

const { formValues } = inject(formInjectionKey) as IArticleFormInject;
</script>

<template>
  <BaseInput label="Tags" placeholder="New tag" v-model="formValues.newTag" />
  <TagList />
</template>
