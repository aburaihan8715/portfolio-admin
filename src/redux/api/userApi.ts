import { baseApi } from '@/redux/api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE USER
    userRegister: builder.mutation({
      query: (registerData) => ({
        url: '/api/v1/users/register',
        method: 'POST',
        body: registerData,
      }),
      invalidatesTags: ['users'],
    }),

    // GET ALL USERS
    getAllUsers: builder.query({
      query: ({ searchQuery, page, limit }) => {
        let queryString = `/api/v1/users`;

        const params = new URLSearchParams();

        if (searchQuery) params.append('searchTerm', searchQuery);
        if (page) params.append('page', page);
        if (limit) params.append('limit', limit);

        if (params.toString()) queryString += `?${params.toString()}`;

        return {
          url: queryString,
          method: 'GET',
        };
      },
      providesTags: ['users'],
    }),

    // UPDATE ROLE
    makeAdminIntoDB: builder.mutation({
      query: (data) => {
        return {
          url: `/api/v1/users/make-admin`,
          method: 'PATCH',
          body: data,
        };
      },
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useGetAllUsersQuery,
  useMakeAdminIntoDBMutation,
} = userApi;
