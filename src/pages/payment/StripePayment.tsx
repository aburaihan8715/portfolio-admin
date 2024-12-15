import SectionHeading from '@/components/ui/SectionHeading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const StripePayment = () => {
  return (
    <>
      <div className="flex min-h-screen justify-center bg-[url('https://images.pexels.com/photos/5475752/pexels-photo-5475752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat sm:px-6 md:mt-0 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 my-[5%] rounded-md border bg-gray-50 py-10">
          <div className="flex justify-center">
            <SectionHeading heading="Payment" />
          </div>
          <div className="w-96 px-2 md:px-5 md:py-20">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </>
  );
};

export default StripePayment;

// 02======== payment form=======
import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';
import { FormEvent, useEffect, useState } from 'react';

import { useAppSelector } from '@/redux/hooks';

import { useCreatePaymentIntentMutation } from '@/redux/api/stripePaymentApi';
import { Button } from '@/components/ui/button';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [transactionId, setTransactionId] = useState('');
  const [cardError, setCardError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCardComplete, setIsCardComplete] = useState(false);

  const user = useAppSelector((state) => state.auth.user);
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const {
  //   cost: price,
  //   date,
  //   slots,
  //   slotTime,
  // } = useAppSelector((state) => state.booking);

  const price = 85;

  useEffect(() => {
    if (price && price > 0) {
      const getClientSecret = async () => {
        try {
          const res = await createPaymentIntent({ price }).unwrap();
          setClientSecret(res?.data?.clientSecret || null);
        } catch (error) {
          console.error('Error getting client secret:', error);
        }
      };
      getClientSecret();
    }
  }, [createPaymentIntent, price]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    if (!stripe || !elements || !clientSecret || !price) {
      console.error(
        'May be not getting stripe, elements and clientSecret!',
      );
      setIsLoading(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      console.error('Card Element is not found.');
      setIsLoading(false);
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.name || 'anonymous',
        },
      });

      if (error) {
        console.error('[Payment Method Error]', error);
        setCardError(error?.message as string);
        setTransactionId('');
        setIsLoading(false);
        return;
      } else {
        setCardError('');
      }

      const { paymentIntent, error: intentError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (intentError) {
        console.error('[Payment Intent Error]', intentError);
        setIsLoading(false);
        return;
      }

      if (paymentIntent?.status === 'succeeded') {
        setTransactionId(paymentIntent.id);
        console.log('Payment succeeded:', paymentIntent);

        // const paymentInfo = {
        //   userEmail: user?.email,
        //   transactionId: paymentIntent.id,
        //   price: price,
        //   date: date,
        //   slots: slots,
        // };

        // 01 info alert
        // const result = await Swal.fire({
        //   title: 'Confirm Payment Details',
        //   html: `
        //       <div style="display: flex; flex-direction: column;">
        //         <p style="font-weight: bold; color: #1a202c;">Email: ${
        //           paymentInfo.userEmail
        //         }</p>
        //         <p style="font-weight: bold; color: #1a202c;">Transaction ID: ${
        //           paymentInfo.transactionId
        //         }</p>
        //         <p style="font-weight: bold; color: #1a202c;">Price: $${
        //           paymentInfo.price
        //         }</p>
        //         <p style="font-weight: bold; color: #1a202c;">Date: ${
        //           paymentInfo.date
        //         }</p>
        //         <p style="font-weight: bold; color: #1a202c;">Slots: ${slotTime.join(
        //           ', ',
        //         )}</p>
        //       </div>
        //       `,
        //   icon: 'info',
        //   confirmButtonColor: '#3085d6',
        //   confirmButtonText: 'Confirm',
        // });

        // 02 thank you alert
        // if (result.isConfirmed) {
        //   await Swal.fire({
        //     title: 'Thank you!',
        //     text: 'Your payment has been successfully processed.',
        //     icon: 'success',
        //     confirmButtonColor: '#3085d6',
        //     confirmButtonText: 'Close',
        //   });
        //   // clear the booking from redux
        //   // dispatch(clearBooking());
        //   // navigate(`/dashboard/my-bookings`);
        // }
      }
    } catch (error) {
      console.error('Payment Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardChange = (event: any) => {
    console.log('Card change event:', event);
    setIsCardComplete(event.complete);
    if (event.error) {
      setCardError(event.error.message);
    } else {
      setCardError('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden rounded-md border px-1">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  padding: '40px',
                  lineHeight: '40px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
            onChange={handleCardChange}
          />
        </div>
        <div className="mt-5">
          <Button
            className="w-full text-lg"
            type="submit"
            disabled={
              !stripe || isLoading || !clientSecret || !isCardComplete
            }
          >
            {isLoading ? 'Processing...' : 'Confirm'}
          </Button>
        </div>
      </form>

      {cardError && <p className="text-warning">{cardError}</p>}
      {transactionId && (
        <p className="text-green-600">
          Transaction complete with transaction ID: {transactionId}
        </p>
      )}
    </>
  );
};
