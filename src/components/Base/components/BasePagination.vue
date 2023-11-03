<template>
  <b-pagination-nav use-router>
    <template #page="{ page, active }">
      <i :class="{ 'text-dark': !active }">{{ page }}</i>
    </template></b-pagination-nav
  >
</template>
