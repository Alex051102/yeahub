import { useState } from 'react'
import styles from './SearchInput.module.css'

import { SearchIcon } from '@/shared/assets/icons/SearchIcon'

const SearchInput = () => {
  const [searchText,setSearchText]=useState('')
  return (
    <div className={styles.search}>
      <SearchIcon></SearchIcon>
      <input className={styles.search__input} value={searchText} onChange={(e)=>setSearchText(e.target.value)} type="text" />
  
    </div>
  )
}

export default SearchInput
