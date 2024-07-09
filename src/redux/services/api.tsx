import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Cinemas'],
  baseQuery: fetchBaseQuery({ baseUrl: `http://185.185.69.80:8082` }),
  endpoints: (builder) => ({
    getCinemas: builder.query({
      query: (body) => ({
        url: 'list',
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetCinemasQuery, useLazyGetCinemasQuery } = api;
