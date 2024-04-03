import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css"
import Subtotal from './Subtotal';

import CheckoutProduct from "./CheckoutProduct"
function CheckOut() {
    const [{ basket }] = useStateValue();
   
    return (
        <div className='checkout'>
            <div className="checkout_left">
            <img
                className='checkout_ad'
                src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg" alt="" />
            {basket?.length === 0 ? (
                <div className="r">
                    <h2>Your Shopping basket is empty</h2>
                    <p>You have an empty basket, Add something to the basket to see your items</p>
                </div>
            ) : (
                <div>
                    {/* Render your checkout items here */}
                    <h2>Your shopping basket</h2>
                    {/* <CheckoutProduct
                    basket
                    /> */}
                    {basket.map(item => (
                       
                        <CheckoutProduct
                        key={item.id}
                        id={item.id}
                        {...item} // Spread the properties of the item object
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length>0 &&(
            <div className="checkout_right">
                {/* <h1>Subtotal</h1> */}
                <Subtotal/>
            </div>
        )}
        </div>
    )
}

export default CheckOut
