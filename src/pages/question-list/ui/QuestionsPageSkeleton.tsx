import { Container } from '@/shared/ui/Container/Container'
import QuestionFiltersSkeleton from '@/widgets/question-filters/ui/QuestionFiltersSkeleton'
import QuestionsListSkeleton from '@/widgets/questions-list/ui/QuestionsListSkeleton'
import styles from './QuestionPage.module.css'

const QuestionsPageSkeleton = () => {
  return (
    <Container>
        <div className={styles.questionsPage}>

             <QuestionsListSkeleton></QuestionsListSkeleton>
             <QuestionFiltersSkeleton></QuestionFiltersSkeleton>
        </div>
   
      </Container> 
  )
}

export default QuestionsPageSkeleton
