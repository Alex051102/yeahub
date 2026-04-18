import  { useCallback} from 'react'
import { useSearchParams } from 'react-router-dom'

export const useQuestionFilters = () => {
    const [searchParams,setSearchParams] = useSearchParams()


    const updateFilters = useCallback((key: string, value: number | string | number[]) => {
      const newParams = new URLSearchParams(searchParams)
     
      let newValues:number[] | number =[]
const current = searchParams.get(key)
      if(typeof value=='string'){
        
        if (current==value) {
       newParams.delete(key)
      } 
      else {
        newParams.set(key,String(value))
      }
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
  /* const updateFilters = useCallback((key: string, value: number | string | number[] | null) => {
    console.log('filterupdate')
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
    if (typeof value === 'string') {
      const newParams = new URLSearchParams(searchParams)
      if (value && value.trim() !== '') {
        newParams.set(key, value)
      } else {
        newParams.delete(key)
      }
      if (key !== 'page') newParams.delete('page')
      setSearchParams(newParams, { replace: true })
      return
    }
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
      if(key=='page'){
        const newParams = new URLSearchParams(searchParams)
      
        newParams.set(key, String(value))
       setSearchParams(newParams, { replace: true })
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
  }, [searchParams, setSearchParams]) */
  const rate=searchParams.get('rate')?.split(',').map(v => Number(v))
  const complexity=searchParams.get('complexity')?.split(',').map(v => Number(v))
  const specialization=searchParams.get('specialization')?.split(',').map(v => Number(v))
  const skills=searchParams.get('skills')?.split(',')
 const titleOrDescription = searchParams.get('titleOrDescription') ?? ''
 const page=Number(searchParams.get('page')?.split(','))




  return {updateFilters,rate,complexity,skills,specialization,titleOrDescription,page}
}


