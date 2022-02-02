import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rectanglesService = createApi({
  reducerPath: 'rectanglesService',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://react-figures-page-default-rtdb.firebaseio.com/',
  }),
  tagTypes: ['rectangles'],
  endpoints: (build) => ({
    fetchRectangles: build.query({
      query: () => `rectangles.json`,
      providesTags: ['rectangles'],
    }),
    createRectangle: build.mutation({
      query: (rectangle) => ({
        url: `rectangles/${rectangle.id}.json`,
        method: 'PUT',
        body: rectangle,
      }),
      invalidatesTags: ['rectangles'],
    }),
    deleteRectangle: build.mutation({
      query: (rectangleId) => ({
        url: `rectangles/${rectangleId}.json`,
        method: 'DELETE',
      }),
      invalidatesTags: ['rectangles'],
    }),
  }),
});

export const {
  useFetchRectanglesQuery,
  useCreateRectangleMutation,
  useDeleteRectangleMutation
} = rectanglesService;
