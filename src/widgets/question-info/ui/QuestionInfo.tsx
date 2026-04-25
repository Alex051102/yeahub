import { useGetQuestionByIdQuery } from "@/entities/question"
import FilterChip from "@/shared/ui/FilterChip/FilterChip"
import FilterSection from "@/shared/ui/FilterSection/FilterSection"
import { useNavigate, useParams } from "react-router-dom"
import styles from './QuestionInfo.module.css'
import QuestionInfoSkeleton from "./QuestionInfoSkeleton"


export const QuestionInfo = () => {
  const { id } = useParams()
    const navigate = useNavigate()
    const numId = Number(id)
    const result = useGetQuestionByIdQuery(numId) 

    const handleSkillClick = (value: number | string) => {
    navigate(`/questions?${typeof value== 'string'?'keywords':'skills'}=${value}`)
  }

 

  if(result.isError) return 
  if(result.isLoading) return <QuestionInfoSkeleton></QuestionInfoSkeleton>

  return (
    <div className={styles.questionInfo__container}>
      <div className={styles.questionInfo}>
        <div className={styles.questionInfo__item}>
          <p className={styles.questionInfo__itemTitle}>Уровень:</p>
          <div className={styles.questionInfo__itemOptions}>
            <div className={styles.questionInfo__level}>
              <p>Сложность:</p>
              <div className={styles.questionInfo__levelStatWrapper}>
                <p className={styles.questionInfo__levelStat}>{result.data?.complexity}</p>
              </div>
            </div>
            <div className={styles.questionInfo__level}>
              <p>Рейтинг:</p>
              <div className={styles.questionInfo__levelStatWrapper}>
                <p className={styles.questionInfo__levelStat}>{result.data?.rate}</p>
              </div>
            </div>
          </div>
        </div>
        <FilterSection title="Навыки">
      {result.data?.questionSkills.map((skill) => (
        <FilterChip
          key={skill.id}
          image={skill.imageSrc}
          title={skill.title}
          selected={true}
          onClick={() => handleSkillClick(skill.id)}
        />
      ))}
    </FilterSection>
    <div className={styles.questionInfo__item}>
          <p className={styles.questionInfo__itemTitle}>Ключевые слова:</p>
          <div className={`${styles.questionInfo__itemOptions} ${styles.questionInfo__itemOptionsWrap}`}>
            {result.data?.keywords.map((word:string)=>(
              <p onClick={() => handleSkillClick(word)} key={word} className={styles.questionInfo__keyWord}>#{word}</p>
            ))}
          </div>
        </div>

    <p className={styles.questionInfo__author} >Автор: <span className={styles.questionInfo__authorSpan}>Дмитрий Мусиенко</span> </p>
      </div>
    
      
    </div>
  )
}

