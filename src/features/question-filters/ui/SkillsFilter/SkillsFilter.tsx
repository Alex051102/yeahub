import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi'
import  { useState } from 'react'
import {useQuestionFilters} from '../../lib/useQuestionFilters'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import styles from './SkillsFilter.module.css'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
interface SkillsFilterProps {
  value: string[] | undefined           
  update: (type:string,value:number) => void  
}
export const SkillsFilter = ({value,update}:SkillsFilterProps) => {
  
    const {filters}=useQuestionFilters()
    const [view,setView]=useState(false)
    const result=useGetSkillsQuery({
        page:1,
        limit:10,
        specializations:filters.specialization
    })

    if(result.isLoading) return <>
    <FilterSection title='Специализация'>
      <div className={styles.filters__data}>
        {[...Array(5)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'107px'} height={'42px'}></Skeleton>
        
       
      ))}
      </div>
      <Skeleton borderRadius='12px' width={'101px'} height={'21px'}></Skeleton>
      
      </FilterSection>
      
      </>
  return (
    
        <FilterSection title='Навыки'>
          <div className={styles.filters__data}>
            {result.data?.data.slice(0,view==false?5:result.data?.data.length).map((skill)=>(
        
        <FilterChip 
        image={skill.imageSrc}
  title={skill.title}
  selected={value?value.includes(String(skill.id)):false}
  onClick={() => update('skills', skill.id)}
/>
        
       
      ))}
          </div>
          
          <button className={styles.filters__button} onClick={()=>setView(prev=>!prev)}>{view?'Скрыть':'Посмотреть все'}</button>
      
     
      </FilterSection>
   
    
  )
}

