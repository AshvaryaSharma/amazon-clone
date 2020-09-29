const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors")


const stripe = require("stripe")(
  "sk_test_51HPvTsD5rnCFQJGPwTg8aJ2Iu2evMsVD53V2sMhCGv0MqZ5wj1D8ZYupnFxqFmVJdxQeQDk7iP2ZXutifjSlmc8i00IPPgADSu"
);
//api setup


// app config

const app = express();

// middlewares

app.use(cors({origin: true}));
app.use(express.json());


/// api roots
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request recieved!!! " , total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    console.log("Sending intent: " + paymentIntent.client_secret)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

/// listen command

exports.api = functions.https.onRequest(app);