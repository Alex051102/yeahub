import { Container } from '@/shared/ui/Container/Container'
import { QuestionDetail } from '@/widgets/question-detail'
import {QuestionInfo} from '@/widgets/question-info'
import styles from './QuestionDeatailPage.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import caretLeft from '@/shared/assets/icons/CaretLeft.svg'
import { useAdaptive } from '@/shared/lib'
import { useState } from 'react'
import SideBar from '@/shared/ui/SideBar/SideBar'
import { useGetQuestionByIdQuery } from '@/entities/question'
import ErrorPage from '@/shared/ui/ErrorPage/ErrorPage'
import { InfoBlock } from '@/shared/ui/InfoBlock/InfoBlock'
export default function QuestionDeatailPage ()  {
  const navigate=useNavigate()
  const [isOpenFilters,setOpenFilters]=useState(false)
    const {isMobile}=useAdaptive() 

    const { id } = useParams()
  const numId = Number(id)
  const {isError,refetch} = useGetQuestionByIdQuery(numId)
   if(isError) return <Container><ErrorPage refetch={refetch} errorMessage='Ошибка загрузки вопроса'></ErrorPage></Container>
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
                <div className={styles.questionDeatailPageMain__aside}>
                  {isMobile?<SideBar isOpen={isOpenFilters} onClose={()=>setOpenFilters(false)}><QuestionInfo></QuestionInfo></SideBar>:<QuestionInfo></QuestionInfo>}
                  <InfoBlock></InfoBlock>
                </div>
                
              
              </div>
        
       </div>
      
    </Container>
     
      
    
  )
}

