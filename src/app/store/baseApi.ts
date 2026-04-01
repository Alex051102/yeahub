import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
console.log('baseApi создается');
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.yeatwork.ru',
  }),
  tagTypes: ['Question', 'Skill', 'Specialization'],
  endpoints: () => ({}),
});
