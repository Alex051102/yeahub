import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi'
import { RATE } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

interface RateFilterProps {
  value: number[] | undefined,           
  update: (type:string,value:number) => void  
}
export const RateFilter = ({value,update}:RateFilterProps) => {
  const {isLoading}=useGetSpecializationQuery({
    page:1,
    limit:10
  })
  if(isLoading) return <FilterSection title='Специализация'>
      
        {[...Array(5)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'32px'} height={'37px'}></Skeleton>
        
       
      ))}
      
      
      
      
      </FilterSection>
  return (
    <FilterSection title='Рейтинг'>
      {RATE.map((r)=>(
        <FilterChip 
  title={String(r)}
  selected={value?.includes(r)??false}
  onClick={() => update('rate', r)}
/>
        
       
      ))}
      </FilterSection>
  )
}


