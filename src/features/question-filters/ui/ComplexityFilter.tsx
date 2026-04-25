import { useGetSpecializationQuery } from '@/entities/specialization/api/specializationApi'
import { COMPLEXITY_RANGES } from '@/shared/constants'
import FilterChip from '@/shared/ui/FilterChip/FilterChip'
import FilterSection from '@/shared/ui/FilterSection/FilterSection'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'

interface ComplexityFilterProps {
  value: number[] | undefined ,        
  update: (type:string,value:number[]) => void  
}
export const ComplexityFilter = ({value,update}:ComplexityFilterProps) => {
  const {isLoading} = useGetSpecializationQuery({
      page: 1,
      limit: 10,
     
    }) 
    
    if(isLoading) return <FilterSection title='Специализация'>
      
        {[...Array(5)].map((_,i)=>(
        <Skeleton borderRadius='12px' key={i} width={'47px'} height={'37px'}></Skeleton>
        
       
      ))}
      
      
      
      
      </FilterSection>
  return (
    <FilterSection title='Сложность'>
      {COMPLEXITY_RANGES.map((compl)=>(
        <FilterChip 
  title={compl.label}
  selected={compl.values.every(v => value?.includes(v))}
  onClick={() => update('complexity', compl.values)}
/>
        
       
      ))}
      </FilterSection>
  )
}


