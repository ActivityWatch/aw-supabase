<script setup lang="ts">
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
</script>

<template lang="pug">
div(v-if="auth.isLoggedIn").flex.flex-col.items-center.justify-center.mt-10
  h1 You are logged in!

  div.my-5
    p Insert content here

    p Your current subscription is: TODO

  button.border.px-2.py-1.rounded(@click="auth.signOut") Logout

div(v-else)
    // half of the screen vertically
    div.flex.h-96.items-center.justify-center
      SignIn
      SignUp
</template>
