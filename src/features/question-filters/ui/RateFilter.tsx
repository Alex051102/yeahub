import { RATE } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import React from 'react'
interface RateFilterProps {
  value: number | null           
  update: (type:string,value:any) => void  
}
export const RateFilter = ({value,update}:RateFilterProps) => {
  return (
    <FilterSection title='Рейтинг'>
      {RATE.map((r)=>(
        <FilterChip 
  title={String(r)}
  selected={false}
  onClick={() => update('rate', r)}
/>
        
       
      ))}
      </FilterSection>
  )
}


