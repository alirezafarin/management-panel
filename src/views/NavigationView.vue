<script setup lang="ts">
import { useCurrentUser } from '@/components/Authentication/composables';
import { logout } from '@/components/Authentication/helper';
import BaseBtn from '@/components/Base/components/BaseBtn.vue';
import BaseNavbar from '@/components/Base/components/BaseNavbar.vue';
import SideBar from '@/components/Navigation/SideBar.vue';
import SidebarLinks from '@/components/Navigation/components/SidebarLinks.vue';
import { en } from '@/dictionary/en';

const { data, isFetching } = useCurrentUser();
</script>

<template>
  <BaseNavbar toggleable="md">
    <template v-if="!isFetching" #left>
      <p class="d-none d-md-block text-light mb-md-0">{{ en.welcome }} {{ data?.user.username }}</p>
    </template>
    <template #right>
      <BaseBtn :click="logout" variant="outline-info">{{ en.logout }}</BaseBtn>
    </template>
    <template #collapsable>
      <div class="d-sm-block d-md-none d-lg-none">
        <SidebarLinks variant="dark" />
      </div>
    </template>
  </BaseNavbar>
  <SideBar class="d-none d-md-block">
    <template #content>
      <SidebarLinks />
    </template>
  </SideBar>
</template>
