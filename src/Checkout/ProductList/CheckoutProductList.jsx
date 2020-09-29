import React, {forwardRef} from "react";
import { useStateValue } from "../../Store/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";


function CheckoutProductList () {
    const [{ basket }, dispatch] = useStateValue();

    return (
      <div>
        <FlipMove>
          {basket.map((item,index) => {
            return <CheckoutProduct data={item} key={index}/>;
          })}
        </FlipMove>
      </div>
    );

}

export default CheckoutProductList;