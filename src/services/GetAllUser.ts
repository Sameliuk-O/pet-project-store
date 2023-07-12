import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser } from '../interface/IUser';

export const getAllUser = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (build) => ({
    getAllUser: build.query<IUser[], void>({
      query: () => ({
        url: '/users',
      }),
    }),
  }),
  reducerPath: 'getAllUser',
});

export const { useGetAllUserQuery } = getAllUser;
