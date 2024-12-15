import { baseApi } from '@/redux/api/baseApi';

const stripePaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: '/api/v1/payments/create-payment-intent',
        method: 'POST',
        body: data,
      }),
    }),

    createPayment: builder.mutation({
      query: (data) => ({
        url: '/api/v1/payments/create-payment',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useCreatePaymentIntentMutation, useCreatePaymentMutation } =
  stripePaymentApi;
