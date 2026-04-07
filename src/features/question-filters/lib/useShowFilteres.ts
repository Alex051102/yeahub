import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi';
import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi';

const entityHooks = {
  skills: useGetSkillsQuery,
  specializations: useGetSpecializationQuery,
} as const;

type EntityType = keyof typeof entityHooks;

interface UseEntityListProps {
  type: EntityType;
  limit?: number;
  specializations?: number | null;
}

export const useEntityList = ({ type, limit = 100, specializations }: UseEntityListProps) => {
  const queryHook = entityHooks[type];

  const params =
    type === 'skills'
      ? { page: 1, limit, specializations: specializations || undefined }
      : { page: 1, limit };

  const result = queryHook(params);

  return {
    items: result.data?.data || [],
    isLoading: result.isLoading,
    isError: result.isError,
  };
};
