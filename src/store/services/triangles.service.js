import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trianglesService = createApi({
  reducerPath: 'trianglesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-figures-page-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['triangles'],
  endpoints: (build) => ({
    fetchTriangles: build.query({
      query: () => 'triangles.json',
      providesTags: ['triangles'],
    }),
    createTriangle: build.mutation({
      query: (triangle) => ({
        url: `triangles/${triangle.id}.json`,
        method: 'PUT',
        body: triangle,
      }),
      invalidatesTags: ['triangles'],
    }),
    deleteTriangle: build.mutation({
      query: (triangleId) => ({
        url: `triangles/${triangleId}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['triangles'],
    })
  }),
});

export const {
  useFetchTrianglesQuery,
  useCreateTriangleMutation,
  useDeleteTriangleMutation
} = trianglesService;
