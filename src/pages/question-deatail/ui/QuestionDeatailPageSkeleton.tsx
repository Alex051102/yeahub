import { Container } from '@/shared/ui/Container/Container'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import QuestionDetailSkeleton from '@/widgets/question-detail/ui/QuestionDetailSkeleton'
import QuestionInfoSkeleton from '@/widgets/question-info/ui/QuestionInfoSkeleton'
import styles from './QuestionDeatailPage.module.css'

const QuestionDeatailPageSkeleton = () => {
  return (
    <Container>
      <div className={styles.questionDeatailPage}>
        <div className={styles.questionDetailBackWrapper}>
          <Skeleton width="50px" height="40px" borderRadius="12px"></Skeleton>
        </div>

        <div className={styles.questionDeatailPageMain}>
          <QuestionDetailSkeleton></QuestionDetailSkeleton>
          <QuestionInfoSkeleton></QuestionInfoSkeleton>
        </div>
      </div>
    </Container>
  )
}

export default QuestionDeatailPageSkeleton
