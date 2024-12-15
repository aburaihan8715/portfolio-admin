import { baseApi } from '@/redux/api/baseApi';

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE CART
    addToCart: builder.mutation({
      query: (data) => ({
        url: '/api/v1/carts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['carts'],
    }),

    // GET CART
    // getCart: builder.query({
    //   query: ({ searchQuery, page, limit }) => {
    //     let queryString = `/api/v1/products`;

    //     const params = new URLSearchParams();

    //     if (searchQuery) params.append('searchTerm', searchQuery);
    //     if (page) params.append('page', page);
    //     if (limit) params.append('limit', limit);

    //     if (params.toString()) queryString += `?${params.toString()}`;

    //     return {
    //       url: queryString,
    //       method: 'GET',
    //     };
    //   },
    //   providesTags: ['products'],
    // }),

    // GET SINGLE PRODUCT
    getCart: builder.query({
      query: () => {
        return {
          url: `/api/v1/carts`,
          method: 'GET',
        };
      },
    }),

    // UPDATE PRODUCT
    // updateProduct: builder.mutation({
    //   query: ({ id, dataForUpdate }) => {
    //     return {
    //       url: `/api/v1/products/${id}`,
    //       method: 'PATCH',
    //       body: dataForUpdate,
    //     };
    //   },
    //   invalidatesTags: ['products'],
    // }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery } = cartApi;
