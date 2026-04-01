// src/entities/question/index.ts

// Экспортируем типы
export type { Question, QuestionsListResponse, GetQuestionsParams } from './model/types';

// Экспортируем API и хуки
export {
  questionApi,
  useGetPublicQuestionsQuery,
  useGetQuestionByIdQuery,
} from './api/questionApi';
