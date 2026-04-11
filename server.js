'use strict';
require('dotenv').config();

const express = require('express');
const Stripe  = require('stripe');
const path    = require('path');

// ─── STRIPE SETUP ────────────────────────────────────────────────────────────
// Your secret key lives ONLY here on the server — never in the browser.
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

// Serve all static files (HTML, CSS, JS) from this folder
app.use(express.static(path.join(__dirname)));

// ─── API: SEND PUBLISHABLE KEY TO FRONTEND ───────────────────────────────────
// The publishable key is safe for the browser to know about.
app.get('/api/config', (req, res) => {
  res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

// ─── API: CREATE PAYMENT INTENT ──────────────────────────────────────────────
// Called when the customer reaches the checkout step.
// We calculate the real total on the server so it can't be tampered with.
app.post('/api/create-payment-intent', express.json(), async (req, res) => {
  try {
    const { items } = req.body; // [{ id, name, price }, ...]

    // Calculate total in cents (Stripe always works in the smallest currency unit)
    const amountCents = items.reduce((sum, item) => sum + Math.round(item.price * 100), 0);

    if (amountCents <= 0) {
      return res.status(400).json({ error: 'Cart total must be greater than zero.' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        items: items.map(i => i.name).join(', '),
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('PaymentIntent error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ─── API: STRIPE WEBHOOK ─────────────────────────────────────────────────────
// Stripe calls this URL after a payment succeeds/fails.
// Use this to send download links, update your database, etc.
app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig     = req.headers['stripe-signature'];
  const secret  = process.env.STRIPE_WEBHOOK_SECRET;
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, secret);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;
    console.log(`✅ Payment succeeded — ${pi.id} — Items: ${pi.metadata.items}`);
    // TODO: email download links to pi.receipt_email
  }

  if (event.type === 'payment_intent.payment_failed') {
    const pi = event.data.object;
    console.log(`❌ Payment failed — ${pi.id}`);
  }

  res.json({ received: true });
});

// ─── START ────────────────────────────────────────────────────────────────────
// Railway sets PORT automatically; fallback to 3456 for local dev.
const PORT = process.env.PORT || 3456;
app.listen(PORT, () => {
  console.log(`TemplateForge server running → http://localhost:${PORT}`);
});
