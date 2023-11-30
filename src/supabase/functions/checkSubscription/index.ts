import type { Stripe } from 'stripe'
import { supabase, stripe } from '../../init'

export default async (req: Request): Promise<Response> => {
  const query = await req.json()
  const userId = query.userId

  if (!userId) {
    return new Response('User ID is required', {
      status: 400
    })
  }

  // Fetch subscription info from Supabase
  const { data, error } = await supabase
    .from('user_subscriptions')
    .select('subscription_id')
    .eq('user_id', userId)

  if (error || !data || !data.length) {
    return new Response('Subscription not found', {
      status: 404
    })
  }

  const subscriptionId = data[0].subscription_id

  // Validate subscription with Stripe
  const subscription = (await stripe.subscriptions.retrieve(subscriptionId)) as Stripe.Subscription

  if (!subscription || subscription.status !== 'active') {
    return new Response('Subscription is not active', {
      status: 403
    })
  }

  return new Response(JSON.stringify(subscription), {
    status: 200
  })
}
