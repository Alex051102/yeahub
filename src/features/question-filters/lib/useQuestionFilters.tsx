import  { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQuestionFilters = () => {
    const [searchParams,setSearchParams] = useSearchParams()

  const updateFilters = useCallback((key: string, value: number | number[] | null) => {
    
    if (value === null) {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete(key)
      if (key !== 'page') newParams.delete('page')
      setSearchParams(newParams, { replace: true })
      return
    }

    const current = searchParams.get(key)
    const currentValues = current ? current.split(',').map(v => Number(v)) : []
    
    let newValues: number[]
    
    if (Array.isArray(value)) {
      
      const hasAll = value.every(v => currentValues.includes(v))
      
      if (hasAll) {
    newValues = currentValues.filter(v => !value.includes(v))
      } else {
        
        newValues = [...new Set([...currentValues, ...value])]
      }
    } else {
      const numValue = Number(value)
      if(key=='specialization'){
        
      if (currentValues.includes(numValue)) {
        newValues = currentValues.filter(v => v !== numValue)
      } else {
        newValues = [numValue]
      }
      }
      else{
        
      if (currentValues.includes(numValue)) {
        newValues = currentValues.filter(v => v !== numValue)
      } else {
        newValues = [...currentValues, numValue]
      }
      }
    
      
    }
    
    const newParams = new URLSearchParams(searchParams)
    
    if (newValues.length > 0) {
      newParams.set(key, newValues.join(','))
    } else {
      newParams.delete(key)
    }
    
   
    if (key !== 'page') {
      newParams.delete('page')
    }
    
    setSearchParams(newParams, { replace: true })
  }, [searchParams, setSearchParams])
  const rate=searchParams.get('rate')?.split(',').map(v => Number(v))
  const complexity=searchParams.get('complexity')?.split(',').map(v => Number(v))
  const specialization=searchParams.get('specialization')?.split(',').map(v => Number(v))
  const skills=searchParams.get('skills')?.split(',')




  return {updateFilters,rate,complexity,skills,specialization}
}


