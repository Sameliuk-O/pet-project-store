import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ICategory } from '../interface/ICategory';

export const allCategoryApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    allCategory: build.query<ICategory[], void>({
      query: () => ({
        method: 'GET',
        url: '/products/categories',
      }),
    }),
  }),
  reducerPath: 'allCategoryApi',
});

export const { useAllCategoryQuery } = allCategoryApi;
