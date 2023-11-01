<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue';
import CustomForm from '@/components/DesignSystem/components/CustomForm.vue';
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue';
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import FormBox from './components/FormBox.vue';
import { en } from '@/dictionary/en';

const form = reactive({ user: '', email: '', pass: '' });

const onSubmit = () => {
  console.log(form);
};
</script>

<template>
  <FormBox :title="en.auth.login" title-class="text-uppercase">
    <CustomForm @submit="onSubmit">
      <CustomInput name="email" :label="en.auth.email" v-model="form.email" type="email" />
      <CustomInput name="password" :label="en.auth.pass" v-model="form.pass" type="password" />
      <CustomBtn class="mt-4" variant="primary" block type="submit">
        {{ en.auth.login }}
      </CustomBtn>
    </CustomForm>
    <template #link>
      <p>
        {{ en.auth.noAccount }}
        <RouterLink class="font-weight-bold text-dark" :to="{ name: 'register' }">
          {{ en.auth.registerNow }}</RouterLink
        >
      </p>
    </template>
  </FormBox>
</template>
