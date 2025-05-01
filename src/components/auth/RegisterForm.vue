<script setup>
import { ref } from 'vue'
import {
  requiredValidator,
  emailValidator,
  passwordValidator,
  confirmedValidator,
} from '@/utils/validators'
import { supabase, formActionDefault } from '@/utils/supabase'
import AlertNotification from '@/components/common/AlertNotification.vue'

const isPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const refVForm = ref()

const formDataDefault = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formAction = ref({
  ...formActionDefault,
})

const formData = ref({
  ...formDataDefault,
})

const onSubmit = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProccess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        firstname: formData.value.firstname,
        lastname: formData.value.lastname,
      },
    },
  })
  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account'
    refVForm.value?.reset()
  }

  formAction.value.formProccess = false
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) {
      onSubmit()
    }
  })
}
</script>

<template>
  <AlertNotification
    :form-success-message="formAction.formSuccessMessage"
    :form-error-message="formAction.formErrorMessage"
  >
  </AlertNotification>

  <v-form class="mt-5" ref="refVForm" @submit.prevent="onFormSubmit">
    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          label="Firstname"
          outlined
          dense
          :rules="[requiredValidator]"
          v-model="formData.firstname"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="formData.lastname"
          label="Lastname"
          outlined
          dense
          :rules="[requiredValidator]"
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
      :rules="[requiredValidator, emailValidator]"
      v-model="formData.email"
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
          :rules="[requiredValidator, passwordValidator]"
          v-model="formData.password"
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
          :rules="[
            requiredValidator,
            confirmedValidator(formData.password_confirmation, formData.password),
          ]"
          v-model="formData.password_confirmation"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn
      class="mt-2"
      type="submit"
      color="deep-orange"
      prepend-icon="mdi-account-plus"
      block
      :disable="formAction.formProccess"
      :loading="formAction.formProccess"
      >Register</v-btn
    >
  </v-form>
</template>
