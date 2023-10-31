<script setup lang="ts">
import CustomBtn from './DesignSystem/components/CustomBtn.vue'
import CustomForm from './DesignSystem/components/CustomForm.vue'
import CustomInput from './DesignSystem/components/CustomInput.vue'
import CustomTextarea from './DesignSystem/components/CustomTextarea.vue'
import ArticleTags from './ArticleTags.vue'
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
