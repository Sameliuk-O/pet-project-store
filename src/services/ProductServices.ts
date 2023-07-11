import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IProduct } from '../interface/IProduct';

export const productCard = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getProductCard: build.query<IProduct, string | undefined>({
      query: (productId) => ({
        url: `/products/${productId}`,
      }),
    }),
  }),
  reducerPath: 'productCard',
});

export const { useGetProductCardQuery } = productCard;
