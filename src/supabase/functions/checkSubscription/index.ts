const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const stripe = require('stripe')(STRIPE_SECRET_KEY)

module.exports = async (req, res) => {
  const userId = req.query.userId || req.body.userId

  if (!userId) {
    return res.status(400).send('User ID is required')
  }

  // Fetch subscription info from Supabase
  const { data, error } = await supabase
    .from('user_subscriptions')
    .select('subscription_id')
    .eq('user_id', userId)

  if (error || !data || !data.length) {
    return res.status(404).send('Subscription not found')
  }

  const subscriptionId = data[0].subscription_id

  // Validate subscription with Stripe
  const subscription = await stripe.subscriptions.retrieve(subscriptionId)

  if (!subscription || subscription.status !== 'active') {
    return res.status(403).send('Subscription is not active')
  }

  return res.status(200).json({ status: 'active' })
}
