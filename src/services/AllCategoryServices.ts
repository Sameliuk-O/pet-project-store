import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allCategoryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    allCategory: build.query<string[], void>({
      query: () => ({
        method: 'GET',
        url: '/products/categories',
      }),
    }),
  }),
  reducerPath: 'allCategoryApi',
});

export const { useAllCategoryQuery } = allCategoryApi;
