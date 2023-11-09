const stripe = require('stripe')(process.env.stripe_secret_key);

export default async (req, res) => {
  const { items, email } = req.body;
  const transformedItems = items.map((item) => ({

    // if quantities are bundled, this needs to change.
    quantity: 1,

    price_data: {
      currency: 'usd',

      unit_amount: item.price * 100,

      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    line_items: transformedItems,

    mode: 'payment',

    success_url: `${process.env.HOST}/success`,

    cancel_url: `${process.env.HOST}/checkout`,

    metadata: {
      email,

      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};


// const session = await stripe.checkout.sessions.create({
//   line_items: [{
//     price: '{{PRICE_ID}}',
//     quantity: 1,
//   }],
//   payment_intent_data: {
//     application_fee_amount: 123,
//   },
//   mode: 'payment',
//   success_url: 'http://localhost:3000/success',
//   cancel_url: '=http://localhost:3000/cancel',
// }, {
//   stripeAccount: '{{amazonclone}}',
// });

// 303 redirect to session.url