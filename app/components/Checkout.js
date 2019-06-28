import React from 'react';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
const service = createCheckoutService();

class Checkout extends React.Component {
    render(){
        embedCheckout({
            "url": "https://tatiana.fun/cart.php?embedded=1&action=loadInCheckout&id=b15bd57c-1b3c-4862-ae5a-2ddb35910a75&token=c617572754f0b35262c1fb67eefa5148d9379a6a934d05b291a0b43db61f4306",
            "containerId": "bc-checkout-container"
        })
    return(embedCheckout)
    } 
}
    
export default Checkout