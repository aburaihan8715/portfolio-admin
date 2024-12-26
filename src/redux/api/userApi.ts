import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // REGISTER
    register: builder.mutation({
      query: (registerData) => ({
        url: '/api/v1/users/register',
        method: 'POST',
        body: registerData,
      }),
      invalidatesTags: ['users'],
    }),

    // LOGIN
    login: builder.mutation({
      query: (loginData) => ({
        url: '/api/v1/users/login',
        method: 'POST',
        body: loginData,
      }),
    }),

    // GET ONE
    getSingleUser: builder.query({
      query: (id) => {
        return {
          url: `/api/v1/users/${id}`,
          method: 'GET',
        };
      },
    }),

    // UPDATE ROLE
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: `/api/v1/users/profile-update`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['users'],
    }),

    // change password
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: '/api/v1/users/change-password',
        method: 'POST',
        body: passwordData,
      }),
    }),

    // forget password
    forgetPassword: builder.mutation({
      query: (email) => ({
        url: '/api/v1/users/forget-password',
        method: 'POST',
        body: email,
      }),
    }),

    // reset password
    resetPassword: builder.mutation({
      query: ({ token, ...bodyData }) => ({
        url: '/api/v1/users/reset-password',
        method: 'POST',
        body: bodyData,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useUpdateProfileMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useRegisterMutation,
} = userApi;
