
import { Container } from '@/shared/ui/Container/Container'
import {QuestionFilters} from '@/widgets/question-filters/ui/QuestionFilters'
import { QuestionsList } from '@/widgets/questions-list/ui/QuestionsList'
import styles from './QuestionPage.module.css'
import { useState } from 'react'
import { useAdaptive } from '@/shared/lib/hooks/useAdaptive'
import { Drawer } from '@/shared/ui/Drawer/Drawer'

export default function QuestionsPage() {

  const {isMobile}=useAdaptive()
  const [isOpenFilters,setOpenFilters]=useState(false)
  return (
    <div>
      <Container>
        <div className={styles.questionsPage}>

             <QuestionsList onOpen={()=>setOpenFilters(true)}></QuestionsList>
             {isMobile?<Drawer isOpen={isOpenFilters} onClose={()=>setOpenFilters(false)}><QuestionFilters onClose={()=>setOpenFilters(false)}></QuestionFilters></Drawer>
             :<QuestionFilters onClose={()=>setOpenFilters(false)}></QuestionFilters>}
            
        </div>
   
      </Container>
     
    </div>
  )
}
