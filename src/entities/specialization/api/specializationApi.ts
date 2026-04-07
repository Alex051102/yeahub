import { baseApi } from '../../../app/store/baseApi';
import type { GetSpecializationParams, SpecializationResponse } from '../model/types';

export const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecialization: builder.query<SpecializationResponse, GetSpecializationParams>({
      query: (params) => ({
        url: '/specializations',
        params: {
          page: params.page ?? 1,
          limit: params.limit ?? 10,
          title: params.title,
        },
      }),

      transformResponse: (response: SpecializationResponse): SpecializationResponse => {
        return {
          data: response.data || [],
          total: response.total || 0,
          page: response.page || 1,
          limit: response.limit || 10,
        };
      },

      providesTags: (result) => {
        if (result?.data) {
          return [
            ...result.data.map(({ id }) => ({ type: 'Specialization' as const, id })),
            { type: 'Specialization', id: 'LIST' },
          ];
        }
        return [{ type: 'Specialization', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetSpecializationQuery } = specializationApi;
