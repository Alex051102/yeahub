import { useGetQuestionByIdQuery } from '@/entities/question'


import { useNavigate, useParams } from 'react-router-dom'
import styles from './QuestionDetail.module.css'

import { ChevronLeftIcon } from '@/shared/assets/icons/ChevronLeftIcon'
import { ChevronRightIcon } from '@/shared/assets/icons/ChevronRightIcon'
import filterButton from '@/shared/assets/icons/filter-button.svg'

interface QuestionDetailProps{
  onOpen:()=>void
}
export const QuestionDetail = ({onOpen}:QuestionDetailProps) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const numId = Number(id)
  const result = useGetQuestionByIdQuery(numId)
  
  
  



  return (
    <div className={styles.questionDetail}>
      
      <div className={styles.questionDetail__main}>
        <div className={styles.questionDetail__introContainer}>
          <div className={styles.questionDetail__intro}>
            {/* <img src={result.data?.imageSrc ?? ''} alt="" /> */}
            <div className={styles.question__imageWrapper}>
               <div className={styles.question__image}></div>
            </div>
           
            <div className={styles.question__introTextWrapper}>
              <p className={styles.question__title}>{result.data?.title}</p>
              <p>{result.data?.description}</p>
            </div>
            <div className={styles.questionDetail__filterButton}>
              <img onClick={onOpen} src={filterButton} alt="" />
            </div>
            
          </div>
         
        </div>
         <div className={styles.questionDetail__navContainer}>
            <div className={styles.questionDetail__nav}>
              <button className={styles.questionDetail__navButtonContainer} onClick={() => navigate(`/questions/${numId - 1}`)}>
                <div className={styles.questionDetail__navButton}>
                   <ChevronLeftIcon></ChevronLeftIcon>
                    <p className={styles.questionDetail__navText}>Предыдущий</p>
                </div>
               
              </button>
              <button className={styles.questionDetail__navButtonContainer} onClick={() => navigate(`/questions/${numId + 1}`)}>
    <div className={styles.questionDetail__navButton}>
                <p className={styles.questionDetail__navText}>Следующий</p>
                 <ChevronRightIcon></ChevronRightIcon>
    </div>
                
              </button>
            </div>
          </div>
           <div className={styles.questionDetail__answerContainer}>
            <div className={styles.questionDetail__answer}>
              <p className={styles.questionDetail__answerTitle}>Краткий ответ</p>
              <div dangerouslySetInnerHTML={{ __html: result.data?.shortAnswer ?? ""}} />
            </div>
           </div>
           <div className={styles.questionDetail__answerContainer}>
            <div className={styles.questionDetail__answer}>
              <p className={styles.questionDetail__answerTitle}>Развёрнутый ответ</p>
              <div dangerouslySetInnerHTML={{ __html: result.data?.longAnswer ?? ""}} />
            </div>
           </div>
      </div>



      {/* <p>{id}</p>
      <p>{result.data?.description}</p>
      
      <button onClick={() => navigate(`/questions/${numId - 1}`)}>prev</button>
      <button onClick={() => navigate(`/questions/${numId + 1}`)}>next</button>

      {result.data?.questionSkills.map((skill) => (
        <FilterChip
          key={skill.id}
          image={skill.imageSrc}
          title={skill.title}
          onClick={() => handleSkillClick(skill.id)}
        />
      ))} */}
    </div>
  )
}