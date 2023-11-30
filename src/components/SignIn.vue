<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const auth = useAuthStore()
const email = ref('')
const password = ref('')
const errorMessage = ref('')

const working = ref(false)

const signIn = async () => {
  try {
    working.value = true
    errorMessage.value = ''
    await auth.signIn(email.value, password.value)
    console.log('User signed in:', auth.user)
  } catch (error: any) {
    console.error('Error signing in:', error)
    errorMessage.value = error.message
  } finally {
    working.value = false
  }
}
</script>

<template lang="pug">
div.container.mx-auto.max-w-md
  div.flex.flex-col.items-center.justify-between
    h1.text-2xl.font-bold Sign In
    input(v-model="email", type="email", placeholder="Email" :disabled="working").rounded.border.m-2.p-2
    input(v-model="password", type="password", placeholder="Password", :disabled="working", @keyup.enter="signIn").rounded.border.m-2.p-2
    button(:disabled="working" @click="signIn").rounded.border.px-2.py-1 Sign In
    p.text-red-500(v-if="errorMessage") {{ errorMessage }}
</template>
