<script setup>
import BottomNavigation from '@/components/layout/navigation/BottomNavigation.vue'
import TopProfileNavigation from './navigation/TopProfileNavigation.vue'
import { useAuthUserStore } from '@/stores/authUser'
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible', 'theme'])

// Utilize pre-defined vue functions
const { xs, sm, mobile } = useDisplay()

// Use Pinia Store
const authStore = useAuthUserStore()

// Load Variables
const isLoggedIn = ref(false)
const isMobileLogged = ref(false)
const isDesktop = ref(false)
const theme = ref(localStorage.getItem('theme') ?? 'light')

//  Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
  emit('theme', theme.value)
}

// Load Functions during component rendering
onMounted(async () => {
  isLoggedIn.value = await authStore.isAuthenticated()
  isMobileLogged.value = mobile.value && isLoggedIn.value
  isDesktop.value = !mobile.value && (isLoggedIn.value || !isLoggedIn.value)
})
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar class="px-3" :color="theme === 'light' ? 'red-lighten-2' : 'red-darken-4'" border>
        <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="theme"
          @click="emit('isDrawerVisible')"
        >
        </v-app-bar-nav-icon>

        <v-app-bar-title>
          <v-img src="/images/logo-shop.png" :width="xs ? '100%' : sm ? '40%' : '14%'"></v-img>
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn
          class="me-2"
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <TopProfileNavigation v-if="isLoggedIn"></TopProfileNavigation>
      </v-app-bar>

      <slot name="navigation"></slot>

      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer
        v-if="!isMobileLogged || isDesktop"
        class="font-weight-bold"
        :class="mobile ? 'text-caption' : ''"
        :color="theme === 'light' ? 'red-lighten-1' : 'red-darken-3'"
        border
        app
      >
        <div :class="mobile ? 'w-100 text-center' : ''">
          Copyright © 2024 - Shirlix Meatshop | All Rights Reserved
        </div>
      </v-footer>

      <BottomNavigation v-else-if="isMobileLogged" :theme="theme"></BottomNavigation>
    </v-app>
  </v-responsive>
</template>
