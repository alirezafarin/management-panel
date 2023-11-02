<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue';
import CustomForm from '@/components/DesignSystem/components/CustomForm.vue';
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue';
import CustomTextarea from '@/components/DesignSystem/components/CustomTextarea.vue';
import { inject } from 'vue';
import { formInjectionKey, type IArticleFormInject } from '../composables';
import ArticleTags from './ArticleTags.vue';

const { buttonDisabled, formValues, isPending, onSubmit } = inject<IArticleFormInject>(
  formInjectionKey
) as IArticleFormInject;
</script>

<template>
  <CustomForm @submit="onSubmit">
    <b-row>
      <b-col lg="9" md="12">
        <CustomInput label="Title" v-model="formValues.title" />
        <CustomInput label="Description" v-model="formValues.description" />
        <CustomTextarea label="Body" rows="10" v-model="formValues.body" />
      </b-col>
      <b-col>
        <ArticleTags />
      </b-col>
    </b-row>
    <CustomBtn
      class="mt-2"
      variant="primary"
      type="submit"
      :disabled="buttonDisabled"
      :is-loading="isPending"
    />
  </CustomForm>
</template>
