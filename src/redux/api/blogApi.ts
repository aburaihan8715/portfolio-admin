import { baseApi } from '@/redux/api/baseApi';

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ========= Mutation ==========
    createBlog: builder.mutation({
      query: (data) => ({
        url: '/api/v1/blogs',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['blogs'],
    }),

    updateBlog: builder.mutation({
      query: (data) => ({
        url: `/api/v1/blogs/${data.blogId}`,
        method: 'PATCH',
        body: data.updatedData,
      }),
      invalidatesTags: ['blogs'],
    }),

    deleteBlog: builder.mutation({
      query: (blogId) => ({
        url: `/api/v1/blogs/${blogId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['blogs'],
    }),

    // ========= Query ==========
    getAllBlogs: builder.query({
      query: () => ({
        url: `/api/v1/blogs`,
        method: 'GET',
      }),
      providesTags: ['blogs'],
    }),

    getSingleBlog: builder.query({
      query: (blogId) => ({
        url: `/api/v1/blogs/${blogId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetSingleBlogQuery,
  useGetAllBlogsQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
