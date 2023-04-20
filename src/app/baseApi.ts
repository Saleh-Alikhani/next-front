import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: process.env.NEXT_PUBLIC_API_URL as string,
    prepareHeaders: async (headers) => {
      try {
        const token = localStorage.getItem('id_token');
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
      } catch (error) {}
      return headers;
    },
  }),
  endpoints: () => ({}),
});
