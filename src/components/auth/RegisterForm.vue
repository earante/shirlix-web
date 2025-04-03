<template>
  <v-form fast-fail @submit.prevent>
    <v-text-field variant="outlined" label="Firstname" type="text"></v-text-field>

    <v-text-field variant="outlined" label="Lastname" type="text"></v-text-field>

    <v-text-field variant="outlined" label="Email" type="email"></v-text-field>

    <v-text-field variant="outlined" label="Password" type="password"></v-text-field>
    <v-text-field variant="outlined" label="Confirm Password" type="password"></v-text-field>

    <v-btn class="mt-2" type="submit" color="deep-orange" prepend-icon="mdi-account-plus" block
      >Register</v-btn
    >
  </v-form>
</template>
