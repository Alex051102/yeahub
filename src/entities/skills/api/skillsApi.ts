import { baseApi } from '../../../app/store/baseApi';
import type { GetSkillsParamas, SkillsResponse } from '../model/types';

export const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, GetSkillsParamas>({
      query: (params) => ({
        url: '/skills',
        params: {
          page: params.page ?? 1,
          limit: params.limit ?? 10,
          title: params.title,
          specializations: params.specializations,
        },
      }),

      transformResponse: (response: SkillsResponse): SkillsResponse => {
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
            ...result.data.map(({ id }) => ({ type: 'Skill' as const, id })),
            { type: 'Skill', id: 'LIST' },
          ];
        }
        return [{ type: 'Skill', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetSkillsQuery } = skillsApi;
