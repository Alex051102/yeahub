import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import styles from './QuestionFiltersSkeleton.module.css'

const QuestionFiltersSkeleton = () => {
  return (
    <div className={styles.questionFilters}>
      <Skeleton width='auto' height='45px' borderRadius='68px'></Skeleton>
      <div className={styles.questionFiltersItem}>
        <Skeleton borderRadius='12px' width={'140px'} height={'24px'}></Skeleton>
        <div className={styles.questionFiltersItem__list}>
            {[...Array(5)].map((_,i)=>(
            <Skeleton borderRadius='12px' key={i} width={'200px'} height={'36px'}></Skeleton>
            
        
        ))}
        
        </div>
        <Skeleton borderRadius='12px' width={'120px'} height={'20px'}></Skeleton>
      
      </div>
      <div className={styles.questionFiltersItem}>
        <Skeleton borderRadius='12px' width={'120px'} height={'24px'}></Skeleton>
      <div className={styles.questionFiltersItem__list}>
        {[...Array(5)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'140px'} height={'42px'}></Skeleton>
        
       
      ))}
      <Skeleton borderRadius='12px' width={'120px'} height={'20px'}></Skeleton>
      </div>
      
      </div>
      <div className={styles.questionFiltersItem}>
        <Skeleton borderRadius='12px' width={'150px'} height={'24px'}></Skeleton>
      <div className={styles.questionFiltersItem__list}>
        {[...Array(4)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'45px'} height={'36px'}></Skeleton>
        
       
      ))}
      
      </div>
     
      </div>
       <div className={styles.questionFiltersItem}>
        <Skeleton borderRadius='12px' width={'150px'} height={'24px'}></Skeleton>
      <div className={styles.questionFiltersItem__list}>
        {[...Array(5)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'33px'} height={'36px'}></Skeleton>
        
       
      ))}
      
      </div>
      
      </div>
    </div>
  )
}

export default QuestionFiltersSkeleton
