import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import  { useState } from 'react'
import styles from './SpecializationFilter.module.css'

interface SpecializationFilterProps {
  value: number[] | undefined          
  update: (type:string,value:number) => void  
}
export const SpecializationFilter = ({value,update}:SpecializationFilterProps) => {

    const result = useGetSpecializationQuery({
    page: 1,
    limit: 10,
   
  })
  
  
  const [view,setView]=useState(false)
  return (
    <FilterSection title='Специализация'>
      <div className={styles.filters__data}>
        {result.data?.data.slice(0,view==false?5:result.data?.data.length).map((sp)=>(
        <FilterChip 
  title={sp.title}
  selected={value?value.includes(sp.id):false}
  onClick={() => update('specialization', sp.id)}
/>
        
       
      ))}
      </div>
      
      <button className={styles.filters__button} onClick={()=>setView(prev=>!prev)}>{view?'Скрыть':'Посмотреть все'}</button>
      
      </FilterSection>
   
  )
}

