// This is your test secret API key.
import Stripe from 'stripe';
const stripe = require('stripe')('sk_test_51Nv4VJDyIjWWDi29pGpsMKgGGMBYT9FQz7Bf9V1uzBzillH1DDDfMDc70w2wtuwwBOhVq2kqmzyrxYRVa9ha9rkr00Uoji3o1k');


export default async function handler(req,res) 
{
  const { items, email} = req.body;
  console.log(req.body)
  const modifiedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["BD", "US", "OM", "CA", "GB"],
    },
    line_items: [modifiedItems],
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/success`,
    cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({id: session.id,});
}


