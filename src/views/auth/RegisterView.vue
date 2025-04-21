<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import { useDisplay } from 'vuetify'
import RegisterForm from '@/components/auth/RegisterForm.vue'
import myLogo from '@/assets/images/logo.png'

const { mobile } = useDisplay()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="8" class="bg-surface-light h-screen" v-if="!mobile"> </v-col>
          <v-col cols="12" md="4" :class="mobile ? '' : 'pt-16'">
            <v-card class="mx-auto" elevation="24" max-width="600">
              <v-card-title class="text-center">
                <v-img
                  class="mx-auto"
                  :src="myLogo"
                  alt="logo.png"
                  :width="mobile ? '75%' : '25%'"
                ></v-img>
                <h3 class="font-weight-black">Shirlix Meatshop</h3>
                <p class="font-weight-bold">Sign up</p>
              </v-card-title>

              <v-card-text class="pt-4">
                <v-divider class="my-5"></v-divider>
                <RegisterForm></RegisterForm>
                <v-divider class="my-5"></v-divider>
                <h5 class="text-center">
                  Don't have account?
                  <RouterLink class="text-deep-orange-lighten-1 font-weight-black" to="/"
                    >Login here.</RouterLink
                  >
                </h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </AppLayout>
</template>
