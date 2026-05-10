
import { ChevronLeftIcon } from '@/shared/assets/icons/ChevronLeftIcon'
import styles from './QuestionNavigation.module.css'
import { ChevronRightIcon } from '@/shared/assets/icons/ChevronRightIcon'
import { useNavigate, useParams } from 'react-router-dom'
export const QuestionNavigation = () => {
    const { id } = useParams()
      const navigate = useNavigate()
      const numId = Number(id)
  return (
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
  )
}

