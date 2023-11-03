<script setup lang="ts">
import { en } from '@/dictionary/en';
import { RouterLink } from 'vue-router';
import BaseBtn from '../Base/components/BaseBtn.vue';
import BaseForm from '../Base/components/BaseForm.vue';
import BaseInput from '../Base/components/BaseInput.vue';
import FormBox from './components/FormBox.vue';
import { useLogin } from './composables';

const { form, onSubmit, buttonDisabled, isPending } = useLogin();
</script>

<template>
  <FormBox :title="en.auth.login" title-class="text-uppercase">
    <BaseForm @submit="onSubmit">
      <BaseInput name="email" :label="en.auth.email" v-model="form.email" type="email" />
      <BaseInput name="password" :label="en.auth.pass" v-model="form.password" type="password" />
      <BaseBtn
        class="mt-4"
        variant="primary"
        block
        type="submit"
        :is-loading="isPending"
        :disabled="buttonDisabled"
      >
        {{ en.auth.login }}
      </BaseBtn>
    </BaseForm>
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
