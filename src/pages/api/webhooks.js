import * as admin from "firebase-admin";
import {buffer} from 'micro';

const serviceAccount=require('../../../permission.json')
const app= !admin.apps.length?admin.initializeApp({
    credential:admin.credential.cert(serviceAccount)
}):admin.app()

const stripe=require('stripe')(process.env.stripe_secret_key)
const endpointsecret= process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder= async (session)=>{
    return app.firestore.collection('users')
    .doc(session.metadata.email).collection("orders")
    .doc(session.id).set({
        amount: session.amount_total/100,
        images: JSON.parse(session.metadata.images),
        timestamp: admin.firestore.FieldValue.serverTimestamp,
    })
    .then(()=>{
        console.log(`success: Order ${session.id} had been added to DB`)
    })
}
export default async (req,res)=>{
    if(req.method==="POST"){

        const requestBuffer = await buffer(req);
        const payload=requestBuffer.toString();
        const sig=req.headers["stripe-signature"];

        let event;
        // verify that event posted cam from stripe or not 
        try{
            event=stripe.webhooks.constructEvent(payload,sig,endpointsecret);        }
        catch(err){
        console.log("error",err.message)
        return res.status(400).send(`webhook error: ${err.message}`)
    }
    // handle the checkout session completed event 
    if(event.type==='checkout.session.completed'){
        const session=event.data.object;
        return fulfillOrder(session).then(()=>res.status(200)
        .catch((err)=>res.status(400).send(`webhook error: ${err.message}`)))
    }
}
}

export const config = {
    api: {
        bodyParser:false,
        externalResolver:true
    }
}