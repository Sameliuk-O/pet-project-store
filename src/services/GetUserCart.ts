import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IGetProduct } from '../interface';

export const userCart = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getUserCart: build.query<IGetProduct, string>({
      query: (userId) => ({
        url: `/carts/user/${userId}`,
      }),
    }),
  }),
  reducerPath: 'userCart',
});

export const { useGetUserCartQuery } = userCart;
