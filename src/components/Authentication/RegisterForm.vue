<script setup lang="ts">
import { reactive } from 'vue';
import FormBox from './components/FormBox.vue';
import CustomInput from '../DesignSystem/components/CustomInput.vue';
import CustomBtn from '../DesignSystem/components/CustomBtn.vue';
import CustomForm from '../DesignSystem/components/CustomForm.vue';

const form = reactive({ user: '', email: '', pass: '' });

const onSubmit = () => {
  console.log(form);
};
</script>

<template>
  <FormBox title="Register">
    <CustomForm @submit="onSubmit">
      <CustomInput name="username" label="User" v-model="form.user" />
      <CustomInput name="email" label="Email" v-model="form.email" type="email" />
      <CustomInput name="password" label="Password" v-model="form.pass" type="password" />
      <CustomBtn class="mt-4" variant="primary" block type="submit"> Register </CustomBtn>
    </CustomForm>
    <template #link>
      <p>
        Already Registered?
        <RouterLink class="font-weight-bold text-dark" :to="{ name: 'login' }">Login</RouterLink>
      </p>
    </template>
  </FormBox>
</template>
