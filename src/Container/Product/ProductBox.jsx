import React from "react";
import "../Container.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useStateValue } from "../../Store/StateProvider";
function ProductBox(props) {

    const [{basket}, dispatch] = useStateValue();
    let ratingElement=[];
    console.log("Ratings Count: " + parseInt(props.rating))
    const rating  = () => {
        for (let i = 0; i < parseInt(props.rating); i++) {
          ratingElement.push(<StarOutlinedIcon className='rating__icon' />);
        }
        return ratingElement;
    }

    const addToBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            }
        })

        console.log("This is the basket >>>" , basket);

    }
    return(
        <div className="product__box">
            <h1 className="product__title">
                {props.title}
            </h1>
            <div className="product__price">${props.price}</div>
            <div className="product__rating">{rating()}</div>
            <img className="product__image" src={props.image} alt="product" />
            <input type="button" className="product__addToBasket" value="Add to basket" onClick={addToBasket}/>
        </div>
    )
}

export default ProductBox;