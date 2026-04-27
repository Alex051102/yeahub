import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi';
import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi';
import { useQuestionFilters } from '@/features/question-filters';

const useFiltersData = () => {
  const { filters } = useQuestionFilters();

  const skills = useGetSkillsQuery({
    page: 1,
    limit: 10,
    specializations: filters.specialization,
  });
  const specialization = useGetSpecializationQuery({
    page: 1,
    limit: 10,
  });

  const isLoading = skills.isLoading || specialization.isLoading;
  return { isLoading };
};

export default useFiltersData;
