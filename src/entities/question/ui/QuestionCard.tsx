import styles from './QuestionCard.module.css'
import accordion from '@/shared/assets/icons/accordion.svg'
import accordeon from '@/shared/assets/icons/questionAccordeon.svg'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import LevelStat from '@/shared/ui/LevelStat/LevelStat'
import SafeHtml from '@/shared/ui/SafeHtml/SafeHtml'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
interface QuestionCardProps {
  id: number
  title: string
  rate: number
  complexity: number
  shortAnswer: string
}
export default function QuestionCard({
  id,
  title,
  rate,
  complexity,
  shortAnswer,
}: QuestionCardProps) {
  const [isOpenAnswer, setOpenAnswer] = useState(false)
  const [isOpenDrawer, setOpenDrawer] = useState(false)

  function opener(e: React.MouseEvent<HTMLDivElement>) {
    const accordeon = document.getElementById('questionsCard__accordeon')
    if (e.target != accordeon) {
      setOpenAnswer((prev) => !prev)
    }
  }

  return (
    <div onClick={(e) => opener(e)} className={styles.questionsCard}>
      <div className={styles.questionsCard__container}>
        <div className={styles.questionsCard__main}>
          <p className={styles.questions__title}>{title}</p>
          <img
            className={`${isOpenAnswer ? `${styles.questionCard__arrowRotate}` : ''} ${styles.questionCard__arrow}`}
            src={accordion}
            alt=""
          />{' '}
        </div>
        {isOpenAnswer && (
          <div className={styles.questionsCard__answer}>
            <div className={styles.questionsCard__info}>
              <div className={styles.questionsCard__stats}>
                <LevelStat name="Рейтинг" stat={rate}></LevelStat>
                <LevelStat name="Сложность" stat={complexity}></LevelStat>
              </div>
              <button onClick={() => setOpenDrawer(true)}>
                <img id="questionsCard__accordeon" src={accordeon} alt="" />
              </button>
              <Drawer
                className={styles.questionsCard__navWrapper}
                onClose={() => setOpenDrawer(false)}
                isOpen={isOpenDrawer}
              >
                <nav className={styles.questionsCard__nav}>
                  <NavLink className={styles.questionsCard__navItemMobile} to={`${id}`}>
                    Подробнее
                  </NavLink>
                </nav>
              </Drawer>
            </div>
            <div className={styles.questionsCard__main}>
              <SafeHtml content={shortAnswer}></SafeHtml>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
