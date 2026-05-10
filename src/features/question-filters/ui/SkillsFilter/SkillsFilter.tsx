import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi'

import { useQuestionFilters } from '../../lib/useQuestionFilters'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import styles from './SkillsFilter.module.css'

import { useViewToggle } from '../../lib/useViewToggle'
interface SkillsFilterProps {
  value: string[] | undefined
  update: (type: string, value: number) => void
}
export const SkillsFilter = ({ value, update }: SkillsFilterProps) => {
  const { filters } = useQuestionFilters()

  const result = useGetSkillsQuery({
    page: 1,
    limit: 10,
    specializations: filters.specialization,
  })
  const { displayedCount, viewAll, toggleView } = useViewToggle(result.data?.data.length)

  return (
    <FilterSection title="Навыки">
      <div className={styles.filters__data}>
        {result.data?.data.slice(0, displayedCount).map((skill) => (
          <FilterChip
            image={skill.imageSrc}
            title={skill.title}
            selected={value ? value.includes(String(skill.id)) : false}
            onClick={() => update('skills', skill.id)}
          />
        ))}
      </div>

      <button className={styles.filters__button} onClick={toggleView}>
        {viewAll ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </FilterSection>
  )
}
