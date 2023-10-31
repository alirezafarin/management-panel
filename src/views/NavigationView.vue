<script setup lang="ts">
import CustomBtn from '@/components/DesignSystem/components/CustomBtn.vue'
import CustomNavbar from '@/components/DesignSystem/components/CustomNavbar.vue'
import SideBar from '@/components/SideBar.vue'
import SidebarLinks from '@/components/SidebarLinks.vue'

const username = 'username'
</script>

<template>
  <CustomNavbar toggleable="md">
    <template #left>
      <p class="d-none d-md-block text-light mb-md-0">Welcome {{ username }}</p>
    </template>
    <template #right>
      <CustomBtn variant="outline-info">Logout</CustomBtn>
    </template>
    <template #collapsable>
      <div class="d-sm-block d-md-none d-lg-none">
        <SidebarLinks variant="dark" />
      </div>
    </template>
  </CustomNavbar>
  <SideBar class="d-none d-md-block">
    <template #content>
      <SidebarLinks />
    </template>
  </SideBar>
</template>
