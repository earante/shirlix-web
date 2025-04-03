<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field variant="outlined" label="Email" type="email"></v-text-field>

    <v-text-field variant="outlined" label="Password" type="password"></v-text-field>

    <v-btn class="mt-2" color="deep-orange" type="submit" prepend-icon="mdi-login" block
      >Login</v-btn
    >
    <v-btn class="mt-2" color="deep-orange" type="submit" prepend-icon="mdi-login" block
      >Login</v-btn
    >
  </v-form>
</template>
