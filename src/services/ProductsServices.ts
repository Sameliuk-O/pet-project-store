import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interface/IProduct';

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    allProduct: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
  reducerPath: 'productsApi',
});

export const { useAllProductQuery } = productsApi;
