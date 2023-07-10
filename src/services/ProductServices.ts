import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interface/IProduct';

export const productApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    allProduct: build.query<IProduct[], void>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
  reducerPath: 'productApi',
});

export const { useAllProductQuery } = productApi;
