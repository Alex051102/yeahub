import { COMPLEXITY_RANGES } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import React from 'react'
interface ComplexityFilterProps {
  value: number | null         
  update: (type:string,value:any) => void  
}
export const ComplexityFilter = ({value,update}:ComplexityFilterProps) => {
  return (
    <FilterSection title='Сложность'>
      {COMPLEXITY_RANGES.map((compl)=>(
        <FilterChip 
  title={compl.label}
  selected={false}
  onClick={() => update('complexity', compl.values)}
/>
        
       
      ))}
      </FilterSection>
  )
}


