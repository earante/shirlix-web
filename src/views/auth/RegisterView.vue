<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme" color="">
      <v-app-bar class="px-3" color="grey-lighten-1">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto pt-16">
              <v-card
                class="mx-auto"
                prepend-icon="mdi-account-plus"
                subtitle="Register"
                elevation="24"
              >
                <template v-slot:title>
                  <span class="font-weight-black">Shirlix Meatshop</span>
                </template>

                <v-card-text class="bg-surface-light pt-4 mx-auto" width="500px">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field variant="outlined" label="Firstname" type="text"></v-text-field>

                    <v-text-field variant="outlined" label="Lastname" type="text"></v-text-field>

                    <v-text-field variant="outlined" label="Email" type="email"></v-text-field>

                    <v-text-field
                      variant="outlined"
                      label="Password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      variant="outlined"
                      label="Confirm Password"
                      type="password"
                    ></v-text-field>

                    <v-btn class="mt-2" type="submit" block>Submit</v-btn>
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
        </v-container>
      </v-main>

      <v-footer color="grey-lighten-1" border app
        >2025 - Copyright &copy; By: Emmanuel Arante</v-footer
      >
    </v-app>
  </v-responsive>
</template>
