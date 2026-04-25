import {useQuestionFilters} from '@/features/question-filters'
import {ComplexityFilter} from '@/features/question-filters'
import {RateFilter} from '@/features/question-filters'
import {SkillsFilter} from '@/features/question-filters'
import {SpecializationFilter} from '@/features/question-filters'
import styles from './QuestionFilters.module.css'

import SearchInput from '@/shared/ui/SearchInput/SearchInput'
import { useGetSkillsQuery } from '@/entities/skills/api/skillsApi'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

export const QuestionFilters = () => {
    const {updateFilters,skills,specialization,rate,complexity}=useQuestionFilters()
    const {isLoading}=useGetSkillsQuery({
      page:1,
      limit:10
    })
  return (
    <div className={styles.filters}>
         <div className={styles.filters__container}>
           
            {isLoading?<Skeleton width='auto' height='45px' borderRadius='68px'></Skeleton>:<SearchInput update={(value)=>updateFilters('titleOrDescription',value)} delay={3000}></SearchInput>}
            <SpecializationFilter value={specialization} update={updateFilters}></SpecializationFilter>
             <SkillsFilter value={skills} update={updateFilters}></SkillsFilter>
            
            <ComplexityFilter value={complexity} update={updateFilters}></ComplexityFilter>
            <RateFilter value={rate} update={updateFilters}></RateFilter>
      
     
         </div>
      
    </div>
  )
}


