import type { Specialization } from '@/entities/specialization/model/types';

export type Skill = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
  createdBy: {
    id: string;
    username: string;
  };
};

export interface SkillsResponse {
  total: number;
  page: number;
  limit: number;
  data: Skill[];
}

export interface GetSkillsParamas {
  page?: number;
  limit?: number;
  title?: string;
  specializations?: number[];
}
