export interface Question {
  id: number;
  title: string;
  slug: string;
  description: string;
  code?: string | null;
  imageSrc?: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  questionSpecializations: Array<{
    id: number;
    title: string;
    slug: string;
    description: string;
    imageSrc?: string | null;
  }>;
  questionSkills: Array<{
    id: number;
    title: string;
    description: string;
    imageSrc?: string;
  }>;
  createdBy: {
    id: string;
    username: string;
  };
}

export interface QuestionsListResponse {
  data: Question[];
  page: number;
  limit: number;
  total: number;
}

export interface GetQuestionsParams {
  page?: number;
  limit?: number;
  specializationId?: number;
  skillId?: number;
  search?: string;
}
