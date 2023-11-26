<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase/init' // Import your Supabase instance

const email = ref('')
const password = ref('')

const signUp = async () => {
  const { user, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  if (error) console.error('Error signing up:', error)
  else console.log('User signed up:', user)
}
</script>

<template lang="pug">
div.container.max-w-md
  div.flex.flex-col.items-center.justify-between
    h1.text-2xl.font-bold Sign Up
    input(v-model="email", type="email", placeholder="Email").rounded.border.m-2.p-2
    input(v-model="password", type="password", placeholder="Password").rounded.border.m-2.p-2
    button(@click="signUp").border.rounded.px-2.py-1 Sign Up
    hr
    router-link(to="/forgot-password").opacity-30 Forgot Password
</template>
