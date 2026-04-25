import  { useCallback, useMemo} from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQuestionFilters = () => {
    const [searchParams,setSearchParams] = useSearchParams()


    const updateFilters = useCallback((key: string, value: number | string | number[] ) => {
      const newParams = new URLSearchParams(searchParams)
     
      let newValues:number[] | number =[]
const current = searchParams.get(key)
     if (typeof value === 'string') {
    const currentValues = current ? current.split(',') : []
    let newValues: string[]
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value)
    } else {
      newValues = [...currentValues, value]
    }
    
    if (newValues.length > 0) {
      newParams.set(key, newValues.join(','))
    } else {
      newParams.delete(key)
    }
    newParams.delete('page')
    setSearchParams(newParams, { replace: true })
    return
  }
     
      if(Array.isArray(value)){
    
        const currentValues = current ? current.split(',').map(v => Number(v)) : []
        const hasAll = value.every(v => currentValues.includes(v))
       console.log(hasAll)
      
        if(hasAll){
          newValues = currentValues.filter(v => !value.includes(v))
        }
        else {
           newValues = [...new Set([...currentValues, ...value])]
        } 
      
      }
     else{
      if(key=='specialization' ){
       const currentNum = current ? Number(current) : null
        
        if (currentNum==value) {
       newParams.delete(key)
       newParams.delete('skills')
      } 
      else {
        newParams.set(key,String(value))
        newParams.delete('skills')
        newParams.delete('page')
      }
      
setSearchParams(newParams, { replace: true })
      return
      }
      if(key=='page'){
       
        const currentNum = current ? Number(current) : null
        if (currentNum==value) {
       newParams.delete(key)
       
      } 
      else {
        newParams.set(key,String(value))
        
      }
      setSearchParams(newParams, { replace: true })
      return
      }
      if(typeof value=='number'){
        const currentValues = current ? current.split(',').map(v => Number(v)) : []
        if(currentValues.includes(value)){
          newValues=currentValues.filter((v)=>v!=value)
        }
        else{
          newValues = [...new Set([...currentValues, value])]
        }
      }
     }
     if (newValues.length > 0) {
      newParams.set(key, newValues.join(','))
      
     
    } else {
      newParams.delete(key)
       
      
    }
    if (key !== 'page') {
    newParams.delete('page')
  }
    setSearchParams(newParams, { replace: true })
    },[searchParams,setSearchParams])

    const resetFilters=()=>{
      const newParams=new URLSearchParams('')
      setSearchParams(newParams)
    }
  const filters = useMemo(()=>{
    return {
      rate:searchParams.get('rate')?.split(',').map(v => Number(v)),
  complexity:searchParams.get('complexity')?.split(',').map(v => Number(v)),
 specialization:searchParams.get('specialization')?.split(',').map(v => Number(v)),
  skills:searchParams.get('skills')?.split(','),
 titleOrDescription : searchParams.get('titleOrDescription') ?? '',
 page:Number(searchParams.get('page')?.split(',')),
 keywords:searchParams.get('keywords')?.split(',').map(v => String(v)),
    }
  },[searchParams])
  
 



  return {resetFilters,updateFilters,filters}
}


