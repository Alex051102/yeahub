
import styles from './QuestionCard.module.css'
import accordion from '@/shared/assets/icons/accordion.svg'
import accordeon from '@/shared/assets/icons/questionAccordeon.svg'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
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
  const [isOpenDrawer,setOpenDrawer]=useState(false)

  function opener(e){
    const accordeon =document.getElementById('questionsCard__accordeon')
    if(e.target!=accordeon){
      setOpenAnswer(prev=>!prev)
    }

  }

  return (
    <div onClick={(e)=>opener(e)} className={styles.questionsCard}>
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
              <button  onClick={()=>setOpenDrawer(true)}><img id='questionsCard__accordeon' src={accordeon} alt="" /></button>
              <Drawer className={styles.questionsCard__navWrapper} onClose={()=>setOpenDrawer(false)} isOpen={isOpenDrawer}>
                <nav className={styles.questionsCard__nav}>
                  <NavLink className={styles.questionsCard__navItemMobile} to={`${id}`}>Подробнее</NavLink>
                   <NavLink className={styles.questionsCard__navItemMobile} to={`*`}>ереакпрнеап</NavLink>
                </nav>
                
                </Drawer>
              
            </div>
            <div className={styles.questionsCard__main}>
              <div dangerouslySetInnerHTML={{ __html: shortAnswer }} />
            </div>
          </div>}
          
          
      </div>
         
         
          
        </div>
  )
}
