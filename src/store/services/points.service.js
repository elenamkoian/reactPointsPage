import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pointsService = createApi({
  reducerPath: 'pointsService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-figures-page-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['points'],
  endpoints: (build) => ({
    fetchPoints: build.query({
      query: () => 'points.json',
      providesTags: ['points'],
    }),
    createPoint: build.mutation({
      query: (point) => ({
        url: `points/${point.id}.json`,
        method: 'PUT',
        body: point,
      }),
      invalidatesTags: ['points'],
    }),
    deletePoint: build.mutation({
      query: (pointId) => ({
        url: `points/${pointId}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['points'],
    }),
  }),
});

export const {
  useFetchPointsQuery,
  useCreatePointMutation,
  useDeletePointMutation
} = pointsService;
