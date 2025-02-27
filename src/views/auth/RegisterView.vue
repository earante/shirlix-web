<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
</script>

<template>
  <AppLayout>
    <template #content>
      <v-row>
        <v-col cols="12" md="6" class="mx-auto pt-10">
          <v-card class="mx-auto" elevation="24">
            <v-card-title class="text-center">
              <v-img
                class="mx-auto"
                src="/public/logo-favicon.png"
                :width="mobile ? '75%' : '25%'"
              ></v-img>
              <h3 class="font-weight-black">Shirlix Meatshop</h3>
              <p>Sign up</p>
            </v-card-title>

            <v-card-text class="bg-surface-light pt-4 mx-auto" width="500px">
              <v-divider class="my-5"></v-divider>
              <v-form fast-fail @submit.prevent>
                <v-text-field variant="outlined" label="Firstname" type="text"></v-text-field>

                <v-text-field variant="outlined" label="Lastname" type="text"></v-text-field>

                <v-text-field variant="outlined" label="Email" type="email"></v-text-field>

                <v-text-field variant="outlined" label="Password" type="password"></v-text-field>
                <v-text-field
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                ></v-text-field>

                <v-btn
                  class="mt-2"
                  type="submit"
                  color="primary"
                  prepend-icon="mdi-account-plus"
                  block
                  >Register</v-btn
                >
              </v-form>
              <v-divider class="my-5"></v-divider>
              <h5 class="text-center">
                Don't have account?
                <RouterLink class="text-primary" to="/">Login here.</RouterLink>
              </h5>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </template>
  </AppLayout>
</template>
