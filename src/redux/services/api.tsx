import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 3001;

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['cinemas'],
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:${BASE_URL}/api/`,
  }),
  endpoints: (builder) => ({
    getCinemas: builder.query({
      query: () => ({ url: 'cinemas' }),
    }),
  }),
});

export const { useGetCinemasQuery } = api;
