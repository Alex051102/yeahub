import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import styles from './QuestionsList.module.css'

const QuestionsListSkeleton = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.questions__container}>
        <Skeleton width="122px" height="33px" borderRadius="8px"></Skeleton>
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} width="auto" height="61px" borderRadius="8px"></Skeleton>
        ))}
        <div className={styles.pagination__wrapper}>
          <Skeleton width="200px" height="43px" borderRadius="8px"></Skeleton>
        </div>
      </div>
    </div>
  )
}

export default QuestionsListSkeleton
