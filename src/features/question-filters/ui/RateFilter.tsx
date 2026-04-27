
import { RATE } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'


interface RateFilterProps {
  value: number[] | undefined,           
  update: (type:string,value:number) => void  
}
export const RateFilter = ({value,update}:RateFilterProps) => {

  
  return (
    <FilterSection title='Рейтинг'>
      {RATE.map((r)=>(
        <FilterChip 
  title={String(r)}
  selected={value?.includes(r)??false}
  onClick={() => update('rate', r)}
/>
        
       
      ))}
      </FilterSection>
  )
}


