<script setup lang="ts">
import CustomCheckboxGroup from '@/components/DesignSystem/components/CustomCheckboxGroup.vue';
import CustomSpinner from '@/components/DesignSystem/components/CustomSpinner.vue';
import { inject } from 'vue';
import {
  formInjectionKey,
  tagsInjectionKey,
  type IArticleFormInject,
  type ITagsInject
} from '../composables';

const { formValues } = inject<IArticleFormInject>(formInjectionKey) as IArticleFormInject;
const { isFetchingTags, tags } = inject<ITagsInject>(tagsInjectionKey) as ITagsInject;
</script>

<template>
  <div class="border tag-list rounded p-3">
    <div class="h-100 d-flex justify-content-center align-items-center" v-if="isFetchingTags">
      <CustomSpinner variant="primary" />
    </div>
    <CustomCheckboxGroup v-else :options="tags" v-model="formValues.tagList" />
  </div>
</template>

<style scoped lang="scss">
.tag-list {
  border-color: $gray-400 !important;
  height: 370px;
  overflow-y: auto;
}
</style>
