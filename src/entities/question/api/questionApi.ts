import { baseApi } from '../../../app/store/baseApi';
import type { Question, QuestionsListResponse, GetQuestionsParams } from '../model/types';

export const questionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPublicQuestions: builder.query<QuestionsListResponse, GetQuestionsParams>({
      query: (params) => ({
        url: '/questions/public-questions',
        params: {
          page: params.page ?? 1,
          limit: params.limit ?? 10,
          title: params.title,
          titleOrDescription: params.titleOrDescription,
          skills: params.skills?.join(','),
          specializationId: params.specializationId,
          complexity: params.complexity,
          rate: params.rate,
          orderBy: params.orderBy,
          order: params.order,
        },
      }),

      transformResponse: (response: QuestionsListResponse): QuestionsListResponse => {
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
            ...result.data.map(({ id }) => ({ type: 'Question' as const, id })),
            { type: 'Question', id: 'LIST' },
          ];
        }
        return [{ type: 'Question', id: 'LIST' }];
      },
    }),

    getQuestionById: builder.query<Question, number>({
      query: (id) => `/questions/${id}`,
      providesTags: (result, error, id) => [{ type: 'Question', id }],
    }),
  }),
});

export const { useGetPublicQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
