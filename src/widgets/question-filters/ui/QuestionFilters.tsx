import {useQuestionFilters} from '@/features/question-filters'
import {ComplexityFilter} from '@/features/question-filters'
import {RateFilter} from '@/features/question-filters'
import {SkillsFilter} from '@/features/question-filters'
import {SpecializationFilter} from '@/features/question-filters'
import styles from './QuestionFilters.module.css'
import close from '@/shared/assets/icons/close-icon.svg'
import SearchInput from '@/shared/ui/SearchInput/SearchInput'
interface QuestionFiltersProps{
    onClose?:()=>void
}
export const QuestionFilters = ({onClose}:QuestionFiltersProps) => {
    const {updateFilters}=useQuestionFilters()
  return (
    <div className={styles.filters}>
         <div className={styles.filters__container}>
            <div className={styles.filters__exitBlock}>
                <img onClick={onClose} src={close} alt="" />
            </div>
            <SearchInput></SearchInput>
            <SpecializationFilter value={1} update={updateFilters}></SpecializationFilter>
             <SkillsFilter value={1} update={updateFilters}></SkillsFilter>
            
      <ComplexityFilter value={1} update={updateFilters}></ComplexityFilter>
      <RateFilter value={1} update={updateFilters}></RateFilter>
      
     
         </div>
      
    </div>
  )
}


