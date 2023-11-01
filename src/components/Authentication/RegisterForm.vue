<script setup lang="ts">
import { reactive } from 'vue';
import FormBox from './components/FormBox.vue';
import CustomInput from '../DesignSystem/components/CustomInput.vue';
import CustomBtn from '../DesignSystem/components/CustomBtn.vue';
import CustomForm from '../DesignSystem/components/CustomForm.vue';
import { en } from '@/dictionary/en';

const form = reactive({ user: '', email: '', pass: '' });

const onSubmit = () => {
  console.log(form);
};
</script>

<template>
  <FormBox :title="en.auth.register">
    <CustomForm @submit="onSubmit">
      <CustomInput name="username" :label="en.auth.user" v-model="form.user" />
      <CustomInput name="email" :label="en.auth.email" v-model="form.email" type="email" />
      <CustomInput name="password" :label="en.auth.pass" v-model="form.pass" type="password" />
      <CustomBtn class="mt-4" variant="primary" block type="submit">
        {{ en.auth.register }}
      </CustomBtn>
    </CustomForm>
    <template #link>
      <p>
        {{ en.auth.registered }}
        <RouterLink class="font-weight-bold text-dark" :to="{ name: 'login' }">{{
          en.auth.login
        }}</RouterLink>
      </p>
    </template>
  </FormBox>
</template>
