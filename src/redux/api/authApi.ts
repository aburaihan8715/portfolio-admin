import { baseApi } from '@/redux/api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
