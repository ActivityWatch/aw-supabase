import { defineStore } from 'pinia'
import { supabase } from '../supabase'
import type { User } from '@supabase/supabase-js'

interface State {
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    user: null
  }),
  actions: {
    async signIn(email: string, password: string) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      if (error) throw error
    },
    async signUp(email: string, password: string) {
      const { error } = await supabase.auth.signUp({
        email,
        password
      })
      if (error) throw error
    },
    signOut() {
      supabase.auth.signOut()
      this.user = null
    },
    async fetchUser() {
      const {
        data: { session },
        error
      } = await supabase.auth.getSession()
      if (error) throw error
      console.log('session', session)
      this.user = session?.user ?? null
    }
  },
  getters: {
    isLoggedIn(this: State) {
      return !!this.user
    }
  }
})

supabase.auth.onAuthStateChange(async (event, session) => {
  console.log('auth state change')
  console.log('event', event)
  console.log('session', session)
  if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
    useAuthStore().fetchUser()
  } else if (event === 'SIGNED_OUT') {
    useAuthStore().user = null
  }
})
