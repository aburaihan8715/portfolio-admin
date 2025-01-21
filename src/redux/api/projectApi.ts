import { baseApi } from '@/redux/api/baseApi';

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ========= Mutation ==========
    createProject: builder.mutation({
      query: (projectData) => ({
        url: '/api/v1/projects',
        method: 'POST',
        body: projectData,
      }),
      invalidatesTags: ['projects'],
    }),

    updateProject: builder.mutation({
      query: (data) => ({
        url: `/api/v1/projects/${data.projectId}`,
        method: 'PATCH',
        body: data.updatedData,
      }),
      invalidatesTags: ['projects'],
    }),

    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `/api/v1/projects/${projectId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['projects'],
    }),

    // ========= Query ==========
    getAllProjects: builder.query({
      query: () => ({
        url: `/api/v1/projects`,
        method: 'GET',
      }),
      providesTags: ['projects'],
    }),

    getSingleProject: builder.query({
      query: (projectId) => ({
        url: `/api/v1/projects/${projectId}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateProjectMutation,
  useGetSingleProjectQuery,
  useGetAllProjectsQuery,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;
