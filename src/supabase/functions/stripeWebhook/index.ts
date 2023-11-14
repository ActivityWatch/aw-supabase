export default async (req, res) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
  const { createClient } = require('@supabase/supabase-js')
  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    // Invalid signature, return error response
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  // Handle the event
  if (event.type === 'invoice.payment_succeeded') {
    // Update subscription status in your database
    const invoice = event.data.object
    const { error } = await supabase
      .from('subscriptions')
      .update({ status: 'active' })
      .match({ stripe_subscription_id: invoice.subscription })

    if (error) {
      console.error('Error updating subscription:', error)
      return res.status(500).send('Internal Server Error')
    }

    // Successful response
    return res.status(200).send('Webhook received and processed successfully')
  } else {
    // Unexpected event type
    return res.status(400).send(`Unhandled event type ${event.type}`)
  }
}
