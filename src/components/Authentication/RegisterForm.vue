<script setup lang="ts">
import { en } from '@/dictionary/en';
import CustomBtn from '../DesignSystem/components/CustomBtn.vue';
import CustomForm from '../DesignSystem/components/CustomForm.vue';
import CustomInput from '../DesignSystem/components/CustomInput.vue';
import FormBox from './components/FormBox.vue';
import { useRegister } from './composables';

const { form, onSubmit, buttonDisabled, isPending } = useRegister();
</script>

<template>
  <FormBox :title="en.auth.register">
    <CustomForm @submit="onSubmit">
      <CustomInput name="username" :label="en.auth.user" v-model="form.username" />
      <CustomInput name="email" :label="en.auth.email" v-model="form.email" type="email" />
      <CustomInput name="password" :label="en.auth.pass" v-model="form.password" type="password" />
      <CustomBtn
        class="mt-4"
        variant="primary"
        block
        type="submit"
        :isLoading="isPending"
        :disabled="buttonDisabled"
      >
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
