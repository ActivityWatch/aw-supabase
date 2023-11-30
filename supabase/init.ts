import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const supabaseUrl = Deno.env.get('SUPABASE_URL')
const supabaseAnonKey = Deno.env.get('VITE_SUPABASE_ANON_KEY')

const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const stripe = new Stripe(stripeKey)
