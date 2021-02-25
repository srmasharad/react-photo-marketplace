import StripeCheckout  from 'react-stripe-checkout' 
import { toast } from 'react-toastify';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_STRIPE_KEY

    const onToken = token => {
        console.log(token)
        toast.dark('Payment Successful')
    }

    return (  
        <StripeCheckout 
            label="Pay Now" 
            name="Photo Marketplace"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            ComponentClass="button"
        />
    );
}
 
export default StripeCheckoutButton;