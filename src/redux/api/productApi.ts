import { baseApi } from '@/redux/api/baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // CREATE PRODUCT
    createProduct: builder.mutation({
      query: (data) => ({
        url: '/api/v1/products',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['products'],
    }),

    // GET ALL PRODUCTS
    getAllProducts: builder.query({
      query: ({ searchQuery, page, limit }) => {
        let queryString = `/api/v1/products`;

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
      providesTags: ['products'],
    }),

    // GET SINGLE PRODUCT
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/api/v1/products/${id}`,
          method: 'GET',
        };
      },
    }),

    // UPDATE PRODUCT
    updateProduct: builder.mutation({
      query: ({ id, dataForUpdate }) => {
        return {
          url: `/api/v1/products/${id}`,
          method: 'PATCH',
          body: dataForUpdate,
        };
      },
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
