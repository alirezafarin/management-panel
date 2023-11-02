<script setup lang="ts">
import CustomForm from '@/components/DesignSystem/components/CustomForm.vue';
import ArticleTags from './ArticleTags.vue';
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue';
import CustomTextarea from '@/components/DesignSystem/components/CustomTextarea.vue';
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue';
</script>

<template>
  <b-row>
    <b-col lg="9" md="12">
      <CustomForm @submit="console.log('submit')">
        <CustomInput label="Title" />
        <CustomInput label="Description" />
        <CustomTextarea label="Body" rows="10" />
      </CustomForm>
    </b-col>
    <b-col>
      <ArticleTags />
    </b-col>
  </b-row>
  <CustomBtn class="mt-2" variant="primary" type="submit" />
</template>
