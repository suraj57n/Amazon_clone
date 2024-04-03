import React from 'react';
import { useStateValue } from "./StateProvider";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    
    // Convert price to number and calculate total
    const total = basket.reduce((acc, el) => acc + parseFloat(el.price), 0);

    // Format the total amount as currency
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <div>
            <p>Subtotal({basket.length}items)<strong>{formatter.format(total)}</strong></p>

           
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
