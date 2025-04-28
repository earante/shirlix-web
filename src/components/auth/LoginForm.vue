<script setup>
import { ref } from 'vue'
import { requiredValidator, emailValidator } from '@/utils/validators'

const isPasswordVisible = ref(false)
const refVForm = ref()

const formDataDefault = {
  email: '',
  password: '',
}

const formData = ref({
  ...formDataDefault,
})

const onLogin = () => {
  alert(formData.value.email)
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) {
      onLogin()
    }
  })
}
</script>

<template>
  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
    <v-text-field
      v-model="formData.email"
      :rules="[requiredValidator, emailValidator]"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      label="Email"
      outlined
      dense
    ></v-text-field>

    <v-text-field
      v-model="formData.password"
      :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
      :type="isPasswordVisible ? 'text' : 'password'"
      density="compact"
      placeholder="Enter your password"
      prepend-inner-icon="mdi-lock-outline"
      label="Password"
      outlined
      dense
      @click:append-inner="isPasswordVisible = !isPasswordVisible"
      :rules="[requiredValidator]"
    ></v-text-field>

    <v-btn class="mt-2" color="deep-orange" type="submit" prepend-icon="mdi-login" block
      >Login</v-btn
    >
  </v-form>
</template>
