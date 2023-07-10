import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interface/IProduct';

export const productSameCategory = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getProductSameCategory: build.query<IProduct[], string | undefined>({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
    }),
  }),
  reducerPath: 'productSameCategory',
});

export const { useGetProductSameCategoryQuery } = productSameCategory;
