<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import router from '../router/index'

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const working = ref(false)

const signUp = async () => {
  try {
    working.value = true
    errorMessage.value = ''
    await auth.signUp(email.value, password.value)
    console.log('User signed up:', auth.user)
    // Redirect to home page after successful sign up
    router.push({ path: '/' })
  } catch (error: any) {
    console.error('Error signing up:', error)
    errorMessage.value = error.message
  } finally {
    working.value = false
  }
}
</script>

<template lang="pug">
div.container.max-w-md
  div.flex.flex-col.items-center.justify-between
    h1.text-2xl.font-bold Sign Up
    input(v-model="email", type="email", placeholder="Email").rounded.border.m-2.p-2
    input(v-model="password", type="password", placeholder="Password", @keyup.enter="signUp").rounded.border.m-2.p-2
    button(@click="signUp").border.rounded.px-2.py-1 Sign Up
    p.text-red-500(v-if="errorMessage") {{ errorMessage }}
    hr
    router-link(to="/forgot-password").opacity-30 Forgot password?
</template>
