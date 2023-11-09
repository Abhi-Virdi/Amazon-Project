import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Check from "../components/CheckoutProduct.js";
import {useSession} from "next-auth/react"
import Currency from "react-currency-formatter"
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function Checkout(){

    const items= useSelector(selectItems)
    const total= useSelector(selectTotal)
    
    const stripePromise = loadStripe(
        process.env.stripe_public_key
      );
      const { data: session } = useSession();
    
    //   const handleCheckout = async () => {
    //     const stripe = await stripePromise;
    
    //     const response = await fetch("api/session/", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ items, email: session.user.email }),
    //     });
    //     const checkoutSession = await response.json();
    
        
    //     const result= await stripe?.redirectToCheckout({
    //       sessionId: checkoutSession.id,
    //     });
    //     if (result.error) {
    //       alert(result?.error.message);
    //     }
    //   };
    
      const handleCheckout = async () => {
        const stripe = await stripePromise;
    
        let newreport = ({
            items:items,
            email:session.user.email,
          });
          
          const response = await axios.post("/api/session", 
            JSON.stringify(newreport),{
            headers: {
              "Content-Type": "application/json",
            },
          });
    
        // Redirecting user/customer to Stripe Checkout
        const result = await stripe?.redirectToCheckout({
            sessionId: response.data.id,
          });
          if (result.error) {
            alert(result?.error.message);
          }
        };
    
    return(
        <div className="bg-gray-100 ">
            <Header/>
    
            <main className="mx-auto lg:flex max-w-screen-2xl">
                <div className="flex-grow m-5 shadow-sm">
                <Image
                    src="https://links.papareact.com/ikj"
                    width={1020}
                    height={250}
                    objectFit="contain"/>
                    <div className="flex flex-col p-5 space-y-5 bg-white">
                        <h1 className='pb-4 text-5xl border-b'>{items.length===0?"Your Shopping cart is empty": "Here are your items"}</h1>
                            {items.map((item,i)=>
                                <Check
                                key={i}
                                id={item.id}
                                title={item.title}
                                image={item.image} 
                                price={item.price}
                                description={item.description}
                                category={item.category}
                                hasPrime={item.hasPrime}/>
                                 )}
                        </div> 
                </div>

                <div className="flex flex-col p-10 bg-white">
                {items.length>0 && (                   
                    <>
                    <h2 className="text-lg font-bold whitespace-nowrap">Subtotal ({items.length} items):
                        <span className="flex flex-col mb-10 text-lg font-bold">
                        <Currency curreny='GBP' quantity={total} />
            
                        </span>
                    </h2>
                    <button role="link" onClick={handleCheckout}  disabled={!session} className={`mt-2 button ${!session && " from-gray-200 to-gray-500 border-gray-200 text-gray-50 cursor-not-allowed"}`}>
            
                        {!session?"Sign with your account":"Proceed to Checkout"}
                    </button>
                    </>
               )}
                </div>
            </main>
        </div>
    )} 

export default Checkout;