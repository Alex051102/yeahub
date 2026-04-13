
import { Container } from '@/shared/ui/Container/Container'
import {QuestionFilters} from '@/widgets/question-filters/ui/QuestionFilters'
import { QuestionsList } from '@/widgets/questions-list/ui/QuestionsList'
import styles from './QuestionPage.module.css'
import { useState } from 'react'

import SideBar from '@/shared/ui/SideBar/SideBar'
import { useAdaptive } from '@/shared/lib'

export default function QuestionsPage() {

  const [isOpenFilters,setOpenFilters]=useState(false)
  const {isMobile}=useAdaptive()
  return (
    <div>
      <Container>
        <div className={styles.questionsPage}>

             <QuestionsList onOpen={()=>setOpenFilters(true)}></QuestionsList>
             {isMobile?<SideBar isOpen={isOpenFilters} onClose={()=>setOpenFilters(false)}><QuestionFilters></QuestionFilters></SideBar>:<QuestionFilters></QuestionFilters>}

            
        </div>
   
      </Container>
     
    </div>
  )
}
