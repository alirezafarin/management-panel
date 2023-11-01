<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue';
import CustomForm from '@/components/DesignSystem/components/CustomForm.vue';
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue';
import { RouterLink } from 'vue-router';
import { reactive } from 'vue';
import FormBox from './components/FormBox.vue';

const form = reactive({ user: '', email: '', pass: '' });

const onSubmit = () => {
  console.log(form);
};
</script>

<template>
  <FormBox title="Login" title-class="text-uppercase">
    <CustomForm @submit="onSubmit">
      <CustomInput name="email" label="Email" v-model="form.email" type="email" />
      <CustomInput name="password" label="Password" v-model="form.pass" type="password" />
      <CustomBtn class="mt-4" variant="primary" block type="submit"> Login </CustomBtn>
    </CustomForm>
    <template #link>
      <p>
        Don't have an account?
        <RouterLink class="font-weight-bold text-dark" :to="{ name: 'register' }">
          Register Now</RouterLink
        >
      </p>
    </template>
  </FormBox>
</template>
