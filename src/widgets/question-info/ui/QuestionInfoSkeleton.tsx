import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import styles from './QuestionInfo.module.css'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'

const QuestionInfoSkeleton = () => {
  return (
    <div className={styles.questionInfo__container}>
      <div className={styles.questionInfo}>
        <div className={styles.questionInfo__item}>
          <Skeleton borderRadius="8px" width="100px" height="34px"></Skeleton>
          <div className={styles.questionInfo__itemOptions}>
            <Skeleton borderRadius="8px" width="125px" height="34px"></Skeleton>
            <Skeleton borderRadius="8px" width="125px" height="34px"></Skeleton>
          </div>
        </div>
        <FilterSection title="Специализация">
          {[...Array(2)].map((_, i) => (
            <Skeleton borderRadius="12px" key={i} width={'101px'} height={'42px'}></Skeleton>
          ))}
        </FilterSection>
        <div className={styles.questionInfo__item}>
          <Skeleton borderRadius="8px" width="100px" height="34px"></Skeleton>
          <div
            className={`${styles.questionInfo__itemOptions} ${styles.questionInfo__itemOptionsWrap}`}
          >
            {[...Array(2)].map((_, i) => (
              <Skeleton borderRadius="12px" key={i} width={'47px'} height={'24px'}></Skeleton>
            ))}
          </div>
        </div>

        <Skeleton borderRadius="12px" width={'151px'} height={'24px'}></Skeleton>
      </div>
    </div>
  )
}

export default QuestionInfoSkeleton
