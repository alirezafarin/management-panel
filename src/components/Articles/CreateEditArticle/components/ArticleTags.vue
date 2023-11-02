<script setup lang="ts">
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue';
import TagList from './TagList.vue';
import { inject } from 'vue';
import { formInjectionKey, type IArticleFormInject } from '../composables';

const { formValues } = inject(formInjectionKey) as IArticleFormInject;
</script>

<template>
  <CustomInput label="Tags" placeholder="New tag" v-model="formValues.newTag" />
  <TagList />
</template>
