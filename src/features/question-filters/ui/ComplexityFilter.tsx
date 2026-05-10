import { COMPLEXITY_RANGES } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'

interface ComplexityFilterProps {
  value: number[] | undefined
  update: (type: string, value: number[]) => void
}
export const ComplexityFilter = ({ value, update }: ComplexityFilterProps) => {
  return (
    <FilterSection title="Сложность">
      {COMPLEXITY_RANGES.map((compl) => (
        <FilterChip
          title={compl.label}
          selected={compl.values.every((v) => value?.includes(v))}
          onClick={() => update('complexity', compl.values)}
        />
      ))}
    </FilterSection>
  )
}
