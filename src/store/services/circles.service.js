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
        method: 'PYT',
        body: circle,
      }),
      invalidatesTags: ['circles'],
    }),
  }),
});

export const {
  useFetchPointsQuery,
  useCreateCircleMutation
} = circlesService;
