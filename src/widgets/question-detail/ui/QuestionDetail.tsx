import { useGetQuestionByIdQuery } from '@/entities/question'
import { useParams } from 'react-router-dom'
import styles from './QuestionDetail.module.css'

import filterButton from '@/shared/assets/icons/filter-button.svg'

import QuestionDetailSkeleton from './QuestionDetailSkeleton'
import ErrorPage from '@/shared/ui/ErrorPage/ErrorPage'

import Answer from '@/shared/ui/Answer/Answer'
import { QuestionNavigation } from '@/features/question-navigation'

interface QuestionDetailProps {
  onOpen: () => void
}

export const QuestionDetail = ({ onOpen }: QuestionDetailProps) => {
  const { id } = useParams()

  const numId = Number(id)
  const { data, refetch, isError, isLoading, status, isFetching } = useGetQuestionByIdQuery(numId)

  if (isError) return <ErrorPage refetch={refetch} errorMessage={`${status}`}></ErrorPage>
  if (isLoading || isFetching) return <QuestionDetailSkeleton></QuestionDetailSkeleton>

  return (
    <div className={styles.questionDetail}>
      <div className={styles.questionDetail__main}>
        <div className={styles.questionDetail__introContainer}>
          <div className={styles.questionDetail__intro}>
            <div className={styles.question__imageWrapper}>
              <img className={styles.question__image} src={data?.imageSrc ?? ''} alt="" />
            </div>
            <div className={styles.question__introTextWrapper}>
              <p className={styles.question__title}>{data?.title}</p>
              <p>{data?.description}</p>
            </div>
            <div className={styles.questionDetail__filterButton}>
              <img onClick={onOpen} src={filterButton} alt="" />
            </div>
          </div>
        </div>
      </div>
      <QuestionNavigation></QuestionNavigation>
      <Answer name="Краткий ответ" answer={data?.shortAnswer} isHiddenContent={false}></Answer>
      <Answer name="Развернутый ответ" answer={data?.longAnswer} isHiddenContent={true}></Answer>
    </div>
  )
}
