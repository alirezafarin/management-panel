<script setup lang="ts">
const onSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <div class="form-container">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input id="input-1" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #eceeef;
}
</style>
