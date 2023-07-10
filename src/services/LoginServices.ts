import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ILoginUser, IToken } from '../interface';

export const loginApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    loginUser: build.mutation<IToken, ILoginUser>({
      query: (body) => ({
        body,
        method: 'POST',
        url: `/auth/login`,
      }),
    }),
  }),
  reducerPath: 'loginApi',
});

export const { useLoginUserMutation } = loginApi;
