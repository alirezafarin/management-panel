<script setup lang="ts">
import BaseBtn from '@/components/Base/components/BaseBtn.vue';
import BaseForm from '@/components/Base/components/BaseForm.vue';
import BaseInput from '@/components/Base/components/BaseInput.vue';
import BaseTextarea from '@/components/Base/components/BaseTextarea.vue';
import { inject } from 'vue';
import { formInjectionKey, type IArticleFormInject } from '../composables';
import ArticleTags from './ArticleTags.vue';
import { en } from '@/dictionary/en';

const { buttonDisabled, formValues, isPending, onSubmit } = inject<IArticleFormInject>(
  formInjectionKey,
) as IArticleFormInject;
</script>

<template>
  <BaseForm @submit="onSubmit">
    <b-row>
      <b-col lg="9" md="12">
        <BaseInput :label="en.articles.title" v-model="formValues.title" />
        <BaseInput :label="en.articles.description" v-model="formValues.description" />
        <BaseTextarea :label="en.articles.body" rows="10" v-model="formValues.body" />
      </b-col>
      <b-col>
        <ArticleTags />
      </b-col>
    </b-row>
    <BaseBtn
      class="mt-2"
      variant="primary"
      type="submit"
      :disabled="buttonDisabled"
      :is-loading="isPending"
    />
  </BaseForm>
</template>
