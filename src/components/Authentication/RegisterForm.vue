<script setup lang="ts">
import BaseBtn from '@/components/Base/components/BaseBtn.vue';
import { en } from '@/dictionary/en';
import BaseForm from '../Base/components/BaseForm.vue';
import BaseInput from '../Base/components/BaseInput.vue';
import FormBox from './components/FormBox.vue';
import { useRegister } from './composables';

const { form, onSubmit, buttonDisabled, isPending } = useRegister();
</script>

<template>
  <FormBox :title="en.auth.register">
    <BaseForm @submit="onSubmit">
      <BaseInput name="username" :label="en.auth.user" v-model="form.username" />
      <BaseInput name="email" :label="en.auth.email" v-model="form.email" type="email" />
      <BaseInput name="password" :label="en.auth.pass" v-model="form.password" type="password" />
      <BaseBtn
        class="mt-4"
        variant="primary"
        block
        type="submit"
        :isLoading="isPending"
        :disabled="buttonDisabled"
      >
        {{ en.auth.register }}
      </BaseBtn>
    </BaseForm>
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
