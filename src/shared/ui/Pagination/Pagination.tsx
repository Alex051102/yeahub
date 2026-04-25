import styles from './Pagination.module.css'
import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon'
import { ArrowRightIcon } from '@/shared/assets/icons/ArrowRightIcon'

interface PaginationProps {
  page: number
  pagesGenerate: (string | number)[]
  updatePages: (page: number) => void  
}

const Pagination = ({ page, updatePages, pagesGenerate }: PaginationProps) => {
  return (
    <nav className={styles.pagination}>
      <button onClick={() => updatePages(page - 1)}>
        <ArrowLeftIcon />
      </button>

      {pagesGenerate.map((p, idx) => (
        <button
          key={idx}
          onClick={() => typeof p === 'number' && updatePages(p)}
          className={`${styles.pagination__item} ${page === p ? styles.pagination__itemActive : ''}`}
          disabled={p === '...'}
        >
          <p className={`${styles.pagination__number} ${page === p ? styles.pagination__numberActive : ''}`}>{p}</p>
        </button>
      ))}

      <button onClick={() => updatePages(page + 1)}>
        <ArrowRightIcon />
      </button>
    </nav>
  )
}

export default Pagination