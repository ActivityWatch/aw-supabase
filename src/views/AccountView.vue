<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'
import { useAuthStore } from '../stores/auth'
import { supabase } from '../utils/supabase'

const auth = useAuthStore()

// Create a ref to hold the hello message
const helloMessage = ref('')

// Define the hello function
const hello = async () => {
  const { data, error } = await supabase.functions.invoke('hello', {
    body: { name: 'test' }
  })
  if (error) {
    console.error('Failed to invoke hello function:', error)
    helloMessage.value = 'Error: Failed to load hello message'
  }
  helloMessage.value = data.message
}

// Call the hello function when the component is mounted
onMounted(hello)

// get subscription status
const subscription: Ref<null | string> = ref(null)

// get subscription status
const getSubscription = async () => {
  if (!auth.user) {
    return
  }

  try {
    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', auth.user?.id)
      .single()
    if (error) throw error

    console.log('Subscription data:', data)
    subscription.value = data
  } catch (error) {
    console.error('Failed to get subscription:', error)
    subscription.value = 'free'
  }
}

// Call the getSubscription function when the component is mounted and when the user changes
onMounted(getSubscription)
watch(() => auth.user, getSubscription)
</script>

<template lang="pug">
div(v-if="auth.isLoggedIn").flex.flex-col.items-center.justify-center.mt-10
  h1 You are logged in!

  div.my-5
    p Email: {{ auth.user?.email }}
    p Your current subscription is: {{ subscription }}

    hr.my-4

    p Hello: {{ helloMessage }}
    p Auth data: {{ auth.user }}

  button.border.px-2.py-1.rounded(@click="auth.signOut") Logout

div(v-else)
    // half of the screen vertically
    div.flex.h-96.items-center.justify-center
      SignIn
      SignUp
</template>
