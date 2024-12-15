// NOTE: Here has been trying to followed React Stripe.js package
import { loadStripe } from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch('/create-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.client_secret));
  }, []);

  const options = {
    appearance: { theme: 'stripe' },
  };

  if (!clientSecret) return <div>Loading...</div>;

  return (
    <Elements
      stripe={stripePromise}
      options={{ ...options, clientSecret }}
    >
      <CheckoutForm />
    </Elements>
  );
};

export default StripePayment;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};
