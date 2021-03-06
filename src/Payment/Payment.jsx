import React, { useState, useEffect } from 'react';
import "./Payment.css"
import CheckoutProduct from "../Checkout/ProductList/CheckoutProduct"
import { useStateValue } from '../Store/StateProvider';
import {Link, useHistory} from "react-router-dom";
import {CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import axios from '../api/axios';
import {db} from "../firebase"


function Payment() {

    const [{basket,user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSuceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
      const getClientSecret = async () => {
        const response = await axios({
          method : "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        console.log("CLIENT SECRET RESPONSE: " + response.data)
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret();
    }, [basket])

    console.log("THE SECRET IS >>>>", clientSecret)


    const handleSubmit = async (event) => {
      event.preventDefault();
        setProcessing(true);



        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement)
          }
        }).then(({paymentIntent})=> {
          //paymentIntent == payment confirmation
          db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created
            })


          setSuceeded(true);
          setError(null);
          setProcessing(false);

          dispatch({
            type: 'EMPTY_BASKET'
          })
          
          history.replace("/orders")
        })
    }
    
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
        
    }

     const getBasketTotal = (items) => {
       let sum = 0;
       items.map((item) => sum += item.price)
       return sum;
     };

    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout ({<Link to="/checkout">{basket.length} items</Link>})
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Address</h3>
            </div>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>1515 Rio Grandr Dr</p>
              <p>St Louis, MO</p>
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item, index) => {
                return <CheckoutProduct data={item} key={index} />;
              })}
            </div>
          </div>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Details</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}> 
                <CardElement onChange={handleChange}/>
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <h3>Order Total: {value}</h3>
                      </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeperator={true}
                    prefix={"$"}
                  />
                  <br/>
                  <button disabled={processing || disabled || succeeded} ><span>{processing ? <p>Processing</p>: "Buy Now"}</span></button>
                </div>

                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment
