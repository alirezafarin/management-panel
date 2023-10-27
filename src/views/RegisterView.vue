<script setup lang="ts">
const onSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <div class="container">
    <div class="form-container px-3">
      <h1 class="title mt-4">Register</h1>
      <b-form @submit="onSubmit">
        <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            :state="null"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            :state="null"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback
          >
        </b-form-group>
        <b-form-group id="example-input-group-1" label="Name" label-for="example-input-1">
          <b-form-input
            id="example-input-1"
            name="example-input-1"
            :state="null"
            aria-describedby="input-1-live-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="input-1-live-feedback"
            >This is a required field and must be at least 3 characters.</b-form-invalid-feedback
          >
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form-container {
  background-color: #eceeef;
  width: 100%;
  max-width: 450px;
  border-radius: 4px;
}

.title {
  font-family: HelveticaNeue;
  font-size: 47px;
  line-height: 1.19;
  color: #707070;
  text-align: center;
}
</style>
