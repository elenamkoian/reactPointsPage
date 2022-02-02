import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const circlesService = createApi({
  reducerPath: 'circlesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-figures-page-default-rtdb.firebaseio.com/',
  }),
  endpoints: (build) => ({
    fetchCircles: build.query({
      query: () => 'circles.json',
      providesTags: ['circles'],
    }),
    createCircle: build.mutation({
      query: (circle) => ({
        url: `circles/${circle.id}.json`,
        method: 'PUT',
        body: circle,
      }),
      invalidatesTags: ['circles'],
    }),
    deleteCircle: build.mutation({
      query: (circleId) => ({
        url: `circles/${circleId}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['circles'],
    }),
  }),
});

export const {
  useFetchCirclesQuery,
  useCreateCircleMutation,
  useDeleteCircleMutation
} = circlesService;
