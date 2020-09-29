import React from "react";

import CurrencyFormat from "react-currency-format";
import "../Checkout.css"
import { useStateValue } from "../../Store/StateProvider";
import { getBasketTotal } from "../../Store/reducer";
import { useHistory } from "react-router-dom";

function Sumtotal() {
  const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const getBasketTotal = (items) => {
        let sum = 0.00
        items.map((item) => sum += item.price);
        return sum;
    }
    return (
      <div className="checkout__sumtotalBox">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
          Subtotal ({basket.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" />
                  <span>  This order contains a gift</span>
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          //value={0}
          displayType={"text"}
          thousandSeperator={true}
          prefix="$"
        />
        <input
          type="button"
          className="checkout__button"
          value="Proceed to checkout"
          onClick= {e => history.push('/payment')}
        />
      </div>
    );
}

export default Sumtotal;