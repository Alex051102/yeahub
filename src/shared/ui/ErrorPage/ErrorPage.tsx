import { useNavigate } from 'react-router-dom'
import styles from './ErrorPage.module.css'
import { Button } from '../Button/Button'
import { Container } from '../Container/Container'
interface ErrorPageProps {
  errorMessage: string
  refetch?: () => void
}
const ErrorPage = ({ refetch, errorMessage }: ErrorPageProps) => {
  const navigate = useNavigate()
  return (
    <Container>
      <div className={styles.errorPage__container}>
        <div className={styles.errorPage}>
          <h3>Ошибка загрузки</h3>
          <p className={styles.errorPage__message}>{errorMessage}</p>
          <div className={styles.errorPage__nav}>
            {refetch && (
              <Button onClick={refetch} size="md" variant="primary">
                Повторить
              </Button>
            )}
            <Button onClick={() => navigate(-1)} size="md" variant="secondary">
              Назад
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ErrorPage
