<script setup lang="ts">
import { en } from '@/dictionary/en';
</script>

<template>
  <b-navbar fixed="top" type="dark" variant="dark">
    <b-navbar-brand href="#"
      ><slot name="brand">{{ en.name }}</slot></b-navbar-brand
    >
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <slot name="left"></slot>
      <slot name="collapsable"></slot>
      <b-navbar-nav class="ml-auto"> <slot name="right"></slot></b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
