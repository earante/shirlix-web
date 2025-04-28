<script setup>
import { ref } from 'vue'

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
</script>

<template>
  <v-form fast-fail @submit.prevent>
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="firstname"
          label="Firstname"
          outlined
          dense
          :rules="nameRules"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="lastname"
          label="Lastname"
          outlined
          dense
          :rules="nameRules"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-text-field
      density="compact"
      placeholder="Email address"
      outlined
      dense
      prepend-inner-icon="mdi-email-outline"
      label="Email"
      type="email"
    ></v-text-field>

    <v-row>
      <v-col cols="12" sm="6">
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
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          :append-inner-icon="isConfirmPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="isConfirmPasswordVisible ? 'text' : 'password'"
          density="compact"
          placeholder="Confirm password"
          prepend-inner-icon="mdi-lock-outline"
          label="Confirm password"
          outlined
          dense
          @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn class="mt-2" type="submit" color="deep-orange" prepend-icon="mdi-account-plus" block
      >Register</v-btn
    >
  </v-form>
</template>
