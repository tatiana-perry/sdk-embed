import React from 'react';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
const service = createCheckoutService();

class Checkout extends React.Component {
    render(){
        embedCheckout({
            "url": "https://tatiana.fun/cart.php?embedded=1&action=loadInCheckout&id=f2ba4f4f-73b4-4806-b46b-61c0f66947b9&token=d1dfd8f0f4bce6689d55e4f8572e861c2259ce9879d8d1c9e0b821c4d7b2476d",
            "containerId": "app"
        })
    return(embedCheckout)
    } 
}

// Tested with code below and routes are working properly. 
// class Checkout extends React.Component{
//     render(){
//         return <h1>Checkout</h1>
//     }
// }
    
export default Checkout