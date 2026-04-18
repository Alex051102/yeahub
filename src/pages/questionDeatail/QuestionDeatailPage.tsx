
import { Container } from '@/shared/ui/Container/Container'
import { QuestionDetail } from '@/widgets/question-detail'
import {QuestionInfo} from '@/widgets/question-info'
import styles from './QuestionDeatail.module.css'
import { useNavigate } from 'react-router-dom'
import caretLeft from '@/shared/assets/icons/CaretLeft.svg'
import { useAdaptive } from '@/shared/lib'
import { useState } from 'react'
import SideBar from '@/shared/ui/SideBar/SideBar'
const QuestionDeatailPage = () => {
  const navigate=useNavigate()
  const [isOpenFilters,setOpenFilters]=useState(false)
    const {isMobile}=useAdaptive() 
  return (
    <Container>
       <div className={styles.questionDeatailPage}>
        <div className={styles.questionDetailBackWrapper}>
           <button className={styles.questionDetailBack} onClick={()=>navigate('/questions')}>
                <img src={caretLeft} alt="" />
                <p className={styles.questionDetailBackText}>Назад</p>
              </button>
        </div>
       
              <div className={styles.questionDeatailPageMain}>
                <QuestionDetail onOpen={()=>setOpenFilters(true)}></QuestionDetail>
                {isMobile?<SideBar isOpen={isOpenFilters} onClose={()=>setOpenFilters(false)}><QuestionInfo></QuestionInfo></SideBar>:<QuestionInfo></QuestionInfo>}
              
              </div>
        
       </div>
      
    </Container>
     
      
    
  )
}

export default QuestionDeatailPage
