import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
console.log('baseApi создается')
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ['Question', 'Skill', 'Specialization'],
  endpoints: () => ({}),
})
