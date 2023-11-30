import Stripe from 'stripe'

const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')

export const stripe = new Stripe(stripeKey)
