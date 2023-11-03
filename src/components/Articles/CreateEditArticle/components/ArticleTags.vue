<script setup lang="ts">
import { inject } from 'vue';
import { formInjectionKey, type IArticleFormInject } from '../composables';
import TagList from './TagList.vue';
import BaseInput from '@/components/Base/components/BaseInput.vue';
import { en } from '@/dictionary/en';

const { formValues } = inject(formInjectionKey) as IArticleFormInject;
</script>

<template>
  <BaseInput
    :label="en.articles.tags"
    :placeholder="en.articles.newTag"
    v-model="formValues.newTag"
  />
  <TagList />
</template>
