<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue'
import CustomForm from '@/components/DesignSystem/components/CustomForm.vue'
import CustomInput from '@/components/DesignSystem/components/CustomInput.vue'
import FormBox from '@/components/FormBox.vue'
import { reactive } from 'vue'

const form = reactive({ user: '', email: '', pass: '' })

const onSubmit = () => {
  console.log(form)
}
</script>

<template>
  <div class="container">
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
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
