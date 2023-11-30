// initialize Supabase client
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const stripeKey = import.meta.env.VITE_STRIPE_SECRET_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const stripe = new Stripe(stripeKey)
