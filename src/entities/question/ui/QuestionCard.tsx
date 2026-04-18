
import styles from './QuestionCard.module.css'
import accordion from '@/shared/assets/icons/accordion.svg'
import accordeon from '@/shared/assets/icons/questionAccordeon.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
interface QuestionCardProps{
  id:number,
  title:string,
  rate:number,
  complexity:number,
  shortAnswer:string,
}
export default function QuestionCard({id
  ,title,rate,complexity,shortAnswer}:QuestionCardProps) {
  const [isOpenAnswer,setOpenAnswer]=useState(false)

  return (
    <div onClick={()=>setOpenAnswer(prev=>!prev)} className={styles.questionsCard}>
      <div className={styles.questionsCard__container}>
       <div className={styles.questionsCard__main}> 
         <p className={styles.questions__title}>{title}</p>
          <img className={`${isOpenAnswer?`${styles.questionCard__arrowRotate}`:""} ${styles.questionCard__arrow}`} src={accordion} alt="" /> </div>
        {isOpenAnswer&&
        <div className={styles.questionsCard__answer}>
            <div className={styles.questionsCard__info}>
              <div className={styles.questionsCard__stats}>
                <div className={styles.questionsCard__stat}>
                  <div className={styles.questionsCard__statContainer}>
                    <p className={styles.questionsCard__statText}>Рейтинг: </p>
                    <div className={styles.questionsCard__statNumber}>
                      <p>{rate}</p>
                    </div>
                </div>
                </div>
                <div className={styles.questionsCard__stat}>
                  <div className={styles.questionsCard__statContainer}>
                    <p className={styles.questionsCard__statText}>Сложность: </p>
                    <div className={styles.questionsCard__statNumber}>
                      <p>{complexity}</p>
                    </div>
                </div>
                </div>
              </div>
              <NavLink to={`${id}`}><img src={accordeon} alt="" /></NavLink>
            </div>
            <div className={styles.questionsCard__main}>
              <div dangerouslySetInnerHTML={{ __html: shortAnswer }} />
            </div>
          </div>}
          
          
      </div>
         
         
          
        </div>
  )
}
