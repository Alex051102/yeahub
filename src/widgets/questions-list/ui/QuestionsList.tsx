
import { useGetPublicQuestionsQuery } from '@/entities/question'


export const QuestionsList = () => {
  
  
  const result = useGetPublicQuestionsQuery({
    page: 1,
    limit: 10,
  })
  
  
  
  
  
  
  if (result.isLoading) return <div>Загрузка RTK...</div>
  if (result.error) return <div>Ошибка RTK: {JSON.stringify(result.error)}</div>
  if (!result.data?.data?.length) return <div>Нет данных от RTK</div>
  
  return (
    <div>
      <h3>RTK Querghhy данные:</h3>
      {result.data.data.map((question:any) => (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <p>{question.description}</p>
        </div>
      ))}
      
      
    </div>
  )
}