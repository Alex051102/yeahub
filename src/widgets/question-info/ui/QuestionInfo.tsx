import { useGetQuestionByIdQuery } from '@/entities/question'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import { useParams } from 'react-router-dom'
import styles from './QuestionInfo.module.css'
import QuestionInfoSkeleton from './QuestionInfoSkeleton'
import LevelStat from '@/shared/ui/LevelStat/LevelStat'
import { useNavigateQuestions } from '@/shared/lib'

export const QuestionInfo = () => {
  const { id } = useParams()

  const numId = Number(id)
  const result = useGetQuestionByIdQuery(numId)

  const { handleNavigate } = useNavigateQuestions()

  if (result.isError) return
  if (result.isLoading) return <QuestionInfoSkeleton></QuestionInfoSkeleton>

  return (
    <div className={styles.questionInfo__container}>
      <div className={styles.questionInfo}>
        <FilterSection classname={'filterTitleGrey'} title="Уровень">
          <div className={styles.questionInfo__itemOptions}>
            <LevelStat name="Сложность" stat={result.data?.complexity}></LevelStat>
            <LevelStat name="Рейтинг" stat={result.data?.complexity}></LevelStat>
          </div>
        </FilterSection>
        <FilterSection classname={'filterTitleGrey'} title="Навыки">
          {result.data?.questionSkills.map((skill) => (
            <FilterChip
              key={skill.id}
              image={skill.imageSrc}
              title={skill.title}
              selected={true}
              onClick={() => handleNavigate('skills', skill.id)}
            />
          ))}
        </FilterSection>
        <FilterSection classname={'filterTitleGrey'} title="Ключевые слова">
          <div className={styles.questionInfo__itemOptions}>
            <div
              className={`${styles.questionInfo__itemOptions} ${styles.questionInfo__itemOptionsWrap}`}
            >
              {result.data?.keywords.map((word: string) => (
                <p
                  onClick={() => handleNavigate('keywords', word)}
                  key={word}
                  className={styles.questionInfo__keyWord}
                >
                  #{word}
                </p>
              ))}
            </div>
          </div>
        </FilterSection>

        <p className={styles.questionInfo__author}>
          Автор:{' '}
          <span className={styles.questionInfo__authorSpan}>
            {result.data?.createdBy.username}
          </span>{' '}
        </p>
      </div>
    </div>
  )
}
