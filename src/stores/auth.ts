import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  async function signIn(email: string, password: string) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw error
  }

  async function signUp(email: string, password: string) {
    const { error } = await supabase.auth.signUp({
      email,
      password
    })
    if (error) throw error
  }

  function signOut() {
    supabase.auth.signOut()
    user.value = null
  }

  async function fetchUser() {
    const {
      data: { session },
      error
    } = await supabase.auth.getSession()
    if (error) throw error
    //console.log('session', session)
    user.value = session?.user ?? null
  }

  return {
    user,
    isLoggedIn,
    signIn,
    signUp,
    signOut,
    fetchUser
  }
})

supabase.auth.onAuthStateChange(async (event, _session) => {
  console.log('auth state change')
  console.log('event', event)
  //console.log('session', _session)
  if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
    useAuthStore().fetchUser()
  } else if (event === 'SIGNED_OUT') {
    useAuthStore().user.value = null
  }
})
