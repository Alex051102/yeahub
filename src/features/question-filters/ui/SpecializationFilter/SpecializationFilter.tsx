import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import React, { useState } from 'react'
import styles from './SpecializationFilter.module.css'
import { useQuestionFilters } from '../../lib/useQuestionFilters'
interface SpecializationFilterProps {
  value: number | null          
  update: (type:string,value:any) => void  
}
export const SpecializationFilter = ({value,update}:SpecializationFilterProps) => {

    const result = useGetSpecializationQuery({
    page: 1,
    limit: 10,
   
  })
  
  const {specialization}=useQuestionFilters()
  const [view,setView]=useState(false)
  return (
    <FilterSection title='Специализация'>
      <div className={styles.filters__data}>
        {result.data?.data.slice(0,view==false?5:result.data?.data.length).map((sp)=>(
        <FilterChip 
  title={sp.title}
  selected={specialization?.includes(sp.id)}
  onClick={() => update('specialization', sp.id)}
/>
        
       
      ))}
      </div>
      
      <button className={styles.filters__button} onClick={()=>setView(prev=>!prev)}>{view?'Скрыть':'Посмотреть все'}</button>
      
      </FilterSection>
   
  )
}

