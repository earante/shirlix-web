<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import SideNavigation from '@/components/layout/navigation/SideNavigation.vue'

import { ref } from 'vue'

const isDrawerVisble = ref(true)
</script>

<template>
  <AppLayout :is-with-app-bar-nav-icon="true" @is-drawer-visible="isDrawerVisble = !isDrawerVisble">
    <template #navigation>
      <SideNavigation :is-drawer-visble="isDrawerVisble"> </SideNavigation>
    </template>
    <template #content>
      <v-container></v-container>
    </template>
  </AppLayout>
</template>
