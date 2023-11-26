<script setup lang="ts">
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

let loggedIn = false
</script>

<template lang="pug">
div(v-if="loggedIn")
  h1 You are logged in!

div(v-else)
    // half of the screen vertically
    div.flex.h-96.items-center.justify-center
      SignIn
      SignUp
</template>
