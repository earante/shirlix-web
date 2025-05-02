<script setup>
import AlertNotification from '@/components/common/AlertNotification.vue'
import { requiredValidator, emailValidator } from '@/utils/validators'
import { useLogin } from '@/composables/auth/login'
import { ref } from 'vue'

const { formData, formAction, refVForm, onFormSubmit } = useLogin()

const isPasswordVisible = ref(false)
</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  ></AlertNotification>

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

    <v-col cols="12">
      <v-text-field
        v-model="formData.password"
        prepend-inner-icon="mdi-lock-outline"
        label="Password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="isPasswordVisible = !isPasswordVisible"
        :rules="[requiredValidator]"
      ></v-text-field>
    </v-col>

    <v-btn
      class="mt-2"
      type="submit"
      color="red-darken-4"
      prepend-icon="mdi-login"
      :disabled="formAction.formProcess"
      :loading="formAction.formProcess"
      block
    >
      Login
    </v-btn>
  </v-form>
</template>
