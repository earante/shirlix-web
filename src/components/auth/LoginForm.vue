<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      label="Email"
      outlined
      dense
    ></v-text-field>

    <v-text-field
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="isPasswordVisible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      label="Password"
      outlined
      dense
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
    ></v-text-field>

    <v-btn class="mt-2" color="deep-orange" type="submit" prepend-icon="mdi-login" block
      >Login</v-btn
    >
  </v-form>
</template>
