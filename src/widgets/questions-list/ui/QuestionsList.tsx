
import { useGetPublicQuestionsQuery, type Question } from '@/entities/question'
import {useQuestionFilters} from '@/features/question-filters'
import styles from './QuestionsList.module.css'
import { FiltersIcon } from '@/shared/assets/icons/FiltersIcon'
import QuestionCard from '@/entities/question/ui/QuestionCard'
import { useAdaptive } from '@/shared/lib'


import Pagination from '@/shared/ui/Pagination/Pagination'

interface QuestionListProps{
  onOpen:()=>void
}
export const QuestionsList = ({onOpen}:QuestionListProps) => {
  
  const {page,rate,complexity,skills,specialization,titleOrDescription,updateFilters}=useQuestionFilters()

  const {isMobile}=useAdaptive()
 
  const result = useGetPublicQuestionsQuery({
    page:  page || 1,
    limit: 10,
    rate:rate,
    complexity:complexity,
    skills:skills,
    specializationId:specialization?.length ? specialization[0] : undefined,
    titleOrDescription:titleOrDescription,
    
  })
  
  
  
  
  if (result.isLoading) return <div>Загрузка RTK...</div>
  if (result.error) return <div>Ошибка RTK: {JSON.stringify(result.error)}</div>
  if (!result.data?.data?.length) return <div>Нет данных от RTK</div>
 
 
  return (
    <div className={styles.questions}>
      <div className={styles.questions__container}>
        <div className={styles.questions__header}>
           <h3>Вопросы</h3>
        {isMobile?<button onClick={onOpen} className={styles.questions__filterButton}><FiltersIcon></FiltersIcon></button>:""}
        </div>
       
      <div className={styles.questions__list}>
        {result.data.data.map((question:Question) => (
          <QuestionCard key={question.id} complexity={question.complexity} shortAnswer={question.shortAnswer}  rate={question.rate} id={question.id} title={question.title}></QuestionCard>
        
      ))}
         </div>

        <div className={styles.pagination__wrapper}>
          <Pagination currentPage={page} pages={Math.ceil(result.data.total/10)} update={(newValue)=>updateFilters('page',newValue)}></Pagination>
        </div>
      
      </div>
      
      
      
      
    </div>
  )
}