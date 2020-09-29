import React, {forwardRef} from "react"
import "./CheckoutProduct.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useStateValue } from "../../Store/StateProvider";
const CheckoutProduct = forwardRef((props,ref) => {

const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: "REMOVE_FROM_BASKET",
            
                id: props.data.id,
            
        })
    }
    return (
      <div className="checkout__productList" ref={ref}>
        <img
          className="checkout__productImage"
          src={props.data.image}
          alt="Product"
        />
        <div className="checkpout__productInfo">
          <p className="checkout__productTitle">{props.data.title}</p>
          <p className="checkout__productPrice">
            <strong>{props.data.price}</strong>
          </p>
          <div className="checkout__productRating">
            {Array(parseInt(props.data.rating))
              .fill()
              .map((_, i) => {
                return <StarOutlinedIcon />;
              })}
          </div>
          {props.hideButton?"":  <input
            className="checkout__RemoveBasket"
            type="button"
            value="Remove from basket"
            onClick={removeFromBasket}
          />}
          
        </div>
      </div>
    );
});

export default CheckoutProduct;
