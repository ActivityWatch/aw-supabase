import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../utils/supabase'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  const user: Ref<User | null> = ref(null)

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
    _signedOut()
  }

  function _signedOut() {
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

  supabase.auth.onAuthStateChange(async (event, session) => {
    console.debug('auth state change', { event: event, session: session })
    if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
      fetchUser()
    } else if (event === 'SIGNED_OUT') {
      user.value = null
    }
  })

  return {
    user,
    isLoggedIn,
    signIn,
    signUp,
    signOut,
    fetchUser
  }
})
