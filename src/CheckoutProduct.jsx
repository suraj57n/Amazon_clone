import React from 'react';
import { useStateValue } from './StateProvider';
import "./CheckoutProduct.css";
function CheckoutProduct({ image, title,price,rating,id }) {
    console.log(image);
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
           
        })
    };

    
    return (
        <div className='checkoutProduct'>
            <img chassName="checkoutProduct_image"
            src={image} alt="Product" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price"> 
                 <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {
                    Array(rating).
                    fill().
                    map((_)=>(
                    <p>⭐️</p>
                    ))
                    }
                 </div>
                 <button className='checkoutProduct_button'
                 onClick={removeFromBasket}>Remove From Basket</button>
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
