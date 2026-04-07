import { useEffect, useState } from 'react'
import styles from './SearchInput.module.css'

import { SearchIcon } from '@/shared/assets/icons/SearchIcon'
import { useDebounce } from '@/shared/lib'
interface SearchInputProps {
  placeholder?:string,
  delay:number,
  update?: (type:string,value:any) => void  
  

}
const SearchInput = ({placeholder,delay,update}:SearchInputProps) => {
  const [searchText,setSearchText]=useState('')
  const value= useDebounce(searchText,delay)
  useEffect(()=>{
    if(update)
      update('titleOrDescription',value)
    
    
  },[value,update])
  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <SearchIcon></SearchIcon>
      <input placeholder={placeholder} className={styles.search__input} value={searchText} onChange={(e)=>setSearchText(e.target.value)} type='search' />
      </div>
      
  
    </div>
  )
}

export default SearchInput
