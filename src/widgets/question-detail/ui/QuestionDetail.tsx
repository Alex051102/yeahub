import { useGetQuestionByIdQuery } from '@/entities/question'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './QuestionDetail.module.css'
import { ChevronLeftIcon } from '@/shared/assets/icons/ChevronLeftIcon'
import { ChevronRightIcon } from '@/shared/assets/icons/ChevronRightIcon'
import filterButton from '@/shared/assets/icons/filter-button.svg'
import { useState } from 'react'
import chevronDown from '@/shared/assets/icons/chevron-down.svg'

import QuestionDetailSkeleton from './QuestionDetailSkeleton'
import ErrorPage from '@/shared/ui/ErrorPage/ErrorPage'

interface QuestionDetailProps {
  onOpen: () => void
}

export const QuestionDetail = ({ onOpen }: QuestionDetailProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const numId = Number(id)
  const {data,refetch,isError,isLoading,status,isFetching} = useGetQuestionByIdQuery(numId)

  
  const [isExpanded, setIsExpanded] = useState(false)
  if(isError) return <ErrorPage refetch={refetch} errorMessage={`${status}`}></ErrorPage>
  if(isLoading || isFetching) return <QuestionDetailSkeleton></QuestionDetailSkeleton>
 
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
        
        <div className={styles.questionDetail__navContainer}>
          <div className={styles.questionDetail__nav}>
            <button 
              className={styles.questionDetail__navButtonContainer} 
              onClick={() => navigate(`/questions/${numId - 1}`)}
            >
              <div className={styles.questionDetail__navButton}>
                <ChevronLeftIcon />
                <p className={styles.questionDetail__navText}>Предыдущий</p>
              </div>
            </button>
            <button 
              className={styles.questionDetail__navButtonContainer} 
              onClick={() => navigate(`/questions/${numId + 1}`)}
            >
              <div className={styles.questionDetail__navButton}>
                <p className={styles.questionDetail__navText}>Следующий</p>
                <ChevronRightIcon />
              </div>
            </button>
          </div>
        </div>
        
        <div className={styles.questionDetail__answerContainer}>
          <div className={styles.questionDetail__answer}>
            <p className={styles.questionDetail__answerTitle}>Краткий ответ</p>
            <div dangerouslySetInnerHTML={{ __html: data?.shortAnswer ?? "" }} />
          </div>
        </div>
        
        <div className={styles.questionDetail__answerContainer}>
          <div className={styles.questionDetail__answer}>
            <p className={styles.questionDetail__answerTitle}>Развёрнутый ответ</p>
           
            <div 
              className={`${styles.answerContent} ${!isExpanded ? styles.collapsed : ''}`}
            >
              <div dangerouslySetInnerHTML={{ __html: data?.longAnswer ?? "" }} />
            </div>
          </div>
          <div className={styles.questionDetail__answerButtonWrapper}>
            <button 
            className={styles.questionDetail__answerButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <p>{isExpanded ? 'Свернуть' : 'Развернуть'}</p>
            <img 
              className={`${styles.questionDetail__answerButtonArrow} ${isExpanded ? styles.rotated : ''}`} 
              src={chevronDown} 
              alt=""
            />
          </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}