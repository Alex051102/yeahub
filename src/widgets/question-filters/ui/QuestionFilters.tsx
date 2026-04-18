import {useQuestionFilters} from '@/features/question-filters'
import {ComplexityFilter} from '@/features/question-filters'
import {RateFilter} from '@/features/question-filters'
import {SkillsFilter} from '@/features/question-filters'
import {SpecializationFilter} from '@/features/question-filters'
import styles from './QuestionFilters.module.css'

import SearchInput from '@/shared/ui/SearchInput/SearchInput'

export const QuestionFilters = () => {
    const {updateFilters,skills,specialization,rate,complexity}=useQuestionFilters()
  return (
    <div className={styles.filters}>
         <div className={styles.filters__container}>
            
            <SearchInput update={(value)=>updateFilters('titleOrDescription',value)} delay={3000}></SearchInput>
            <SpecializationFilter value={specialization} update={updateFilters}></SpecializationFilter>
             <SkillsFilter value={skills} update={updateFilters}></SkillsFilter>
            
            <ComplexityFilter value={complexity} update={updateFilters}></ComplexityFilter>
            <RateFilter value={rate} update={updateFilters}></RateFilter>
      
     
         </div>
      
    </div>
  )
}


