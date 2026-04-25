
interface ErrorWidgetProps{
    errorMessage:string,
    reset?:()=>void
}
import { Button } from '../Button/Button'
import styles from './ErrorWidget.module.css'
const ErrorWidget = ({reset,errorMessage}:ErrorWidgetProps) => {
  return (
    <div className={styles.errorWidget__container}>
      <div className={styles.errorWidget}>
        <h3>К сожалению, по запросу ничего не найдено.</h3>
        <p className={styles.errorWidget__message}>{errorMessage}</p>
        {reset&& <div className={styles.errorWidget__nav}>
            
                <Button onClick={reset} variant='secondary' size='md'>Сбросить фильтры</Button>
            
            
        </div>}
       
      </div>
    </div>
  )
}

export default ErrorWidget
