import React from 'react';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
const service = createCheckoutService();

class Checkout extends React.Component {
    render(){
        embedCheckout({
            "url": "https://tatiana.fun/cart.php?embedded=1&action=loadInCheckout&id=cdd45be7-a7e4-4a48-b05c-e1636bed1c27&token=d214c0d89e15b3d2f73c64bfebdb81cfff1557a2dc215caa0eced3f388ceb89a",
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