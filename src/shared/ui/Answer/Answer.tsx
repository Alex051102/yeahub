
import{ useState } from 'react'
import SafeHtml from '../SafeHtml/SafeHtml'
import styles from './Answer.module.css'
import chevronDown from '@/shared/assets/icons/chevron-down.svg'
interface AnswerProps{
    answer:string | undefined,
    isHiddenContent:boolean,
    name:string
}
const Answer = ({name,answer,isHiddenContent}:AnswerProps) => {
      const [isExpanded, setIsExpanded] = useState(false)
  return (
     <div className={styles.answerContainer}>
          <div className={styles.answer}>
            <p className={styles.answerTitle}>{name}</p>
           
            <div 
              className={`${styles.answerContent} ${!isExpanded && isHiddenContent ? styles.collapsed : ''}`}
            >
              <SafeHtml content={answer}></SafeHtml>
            </div>
          </div>
          {isHiddenContent && <div className={styles.answerButtonWrapper}>
            <button 
            className={styles.answerButton}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <p>{isExpanded ? 'Свернуть' : 'Развернуть'}</p>
            <img 
              className={`${styles.answerButtonArrow} ${isExpanded ? styles.rotated : ''}`} 
              src={chevronDown} 
              alt=""
            />
          </button>
          </div> }
          
          
        </div>
  )
}

export default Answer
