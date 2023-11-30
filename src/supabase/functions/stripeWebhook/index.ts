import { supabase, stripe } from '../../init'

const STRIPE_WEBHOOK_SECRET = import.meta.env.VITE_STRIPE_WEBHOOK_SECRET

export default async (req: Request): Promise<Response> => {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event
  try {
    event = await stripe.webhooks.constructEventAsync(body, sig, STRIPE_WEBHOOK_SECRET)
  } catch (err: any) {
    // Invalid signature, return error response
    return new Response(`Webhook Error: ${err.message}`, { status: 400 })
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
      return new Response('Internal Server Error', { status: 500 })
    }

    // Successful response
    return new Response('Webhook received and processed successfully', {
      status: 200
    })
  } else {
    // Unexpected event type
    return new Response(`Unhandled event type ${event.type}`, { status: 400 })
  }
}
