import { useEffect, useRef } from 'react'
import styles from './SearchInput.module.css'
import { SearchIcon } from '@/shared/assets/icons/SearchIcon'

interface SearchInputProps {
  placeholder?: string
  delay?: number
  update?: ( value: string) => void
}

const SearchInput = ({ 
  placeholder = 'Поиск...', 
  delay = 500, 
  update 
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  
  const handleInput = () => {
    const value = inputRef.current?.value || ''
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    timeoutRef.current = setTimeout(() => {
      if (update) {
        update(value)
      }
    }, delay)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className={styles.search}>
      <div className={styles.search__container}>
        <SearchIcon />
        <input
          ref={inputRef}
          type="search"
          placeholder={placeholder}
          className={styles.search__input}
          onInput={handleInput}
        />
      </div>
    </div>
  )
}

export default SearchInput