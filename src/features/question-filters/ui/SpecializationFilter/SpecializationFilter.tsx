import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'

import styles from './SpecializationFilter.module.css'

import { useViewToggle } from '../../lib/useViewToggle'

interface SpecializationFilterProps {
  value: number[] | undefined          
  update: (type:string,value:number) => void  
}
export const SpecializationFilter = ({value,update}:SpecializationFilterProps) => {

    const result = useGetSpecializationQuery({
    page: 1,
    limit: 10,
   
  })

  
  
  
  const {displayedCount, viewAll,toggleView}=useViewToggle(result.data?.data.length)

  
  return (
    <FilterSection title='Специализация'>
      <div className={styles.filters__data}>
        {result.data?.data.slice(0,displayedCount).map((sp)=>(
        <FilterChip 
  title={sp.title}
  selected={value?value.includes(sp.id):false}
  onClick={() => update('specialization', sp.id)}
/>
        
       
      ))}
      </div>
      
      <button className={styles.filters__button} onClick={toggleView}>{viewAll?'Скрыть':'Посмотреть все'}</button>
      
      </FilterSection>
   
  )
}

