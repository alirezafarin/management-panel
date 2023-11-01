<script setup lang="ts">
const linkGen = (pageNum: number) => {
  return pageNum === 1 ? '?' : `?page=${pageNum}`
}
</script>

<template>
  <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" use-router>
    <template #page="{ page }">
      <i class="text-dark">{{ page }}</i>
    </template></b-pagination-nav
  >
</template>
