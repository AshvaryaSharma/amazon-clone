import React from "react";
import "./Checkout.css";
import Sumtotal from "./Sumtotal/Sumtotal";
import CheckoutProductList from "./ProductList/CheckoutProductList"

function Checkout() {
    return (
      <div className="checkout">
        <div className="checkout__productInfo">
          <img src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/google-display-ads-example-2-final.png?oV7qevVB2XtFyF_O64TG6L27AFM3M2oL&itok=TBfuuTM_"
          alt="add" />
          <h1>Your shopping basket</h1>
          <div className="checkout__list">
            <CheckoutProductList />
          </div>
        </div>
        <div className="checkout__total">
          <Sumtotal />
         
         
        </div>
      </div>
    );
}


export default Checkout;