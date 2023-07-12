import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IAddProduct, IGetProduct } from '../interface/IAddProduct';

export const addProductCart = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    addProductCart: build.mutation<IGetProduct, IAddProduct>({
      query: (body) => ({
        body,
        method: 'POST',
        url: '/carts',
      }),
    }),
  }),
  reducerPath: 'addProductCart',
});

export const { useAddProductCartMutation } = addProductCart;
