import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import styles from './QuestionDetail.module.css'

const QuestionDetailSkeleton = () => {
  return (
    <div className={styles.questionDetail}>
      <div className={styles.questionDetail__main}>
        <div className={styles.questionDetail__introContainer}>
          <div className={styles.questionDetail__intro}>
            <div className={styles.question__imageWrapper}>
              <Skeleton width="160px" borderRadius="0" height="160px"></Skeleton>
            </div>
            <div className={styles.question__introTextWrapper}>
              <Skeleton width="auto" borderRadius="12px" height="36px"></Skeleton>
              <Skeleton width="auto" borderRadius="12px" height="55px"></Skeleton>
            </div>
          </div>
        </div>

        <div className={styles.questionDetail__navContainer}>
          <div className={styles.questionDetail__nav}>
            <Skeleton width="140px" borderRadius="12px" height="50px"></Skeleton>
            <Skeleton width="140px" borderRadius="12px" height="50px"></Skeleton>
          </div>
        </div>

        <div className={styles.questionDetail__answerContainer}>
          <div className={styles.questionDetail__answer}>
            <Skeleton width="90px" borderRadius="12px" height="30px"></Skeleton>
            <Skeleton width="auto" borderRadius="12px" height="140px"></Skeleton>
          </div>
        </div>

        <div className={styles.questionDetail__answerContainer}>
          <div className={styles.questionDetail__answer}>
            <Skeleton width="90px" borderRadius="12px" height="30px"></Skeleton>
            <Skeleton width="auto" borderRadius="12px" height="300px"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionDetailSkeleton
