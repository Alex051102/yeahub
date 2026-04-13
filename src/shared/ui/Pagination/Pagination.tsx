

import styles from './Pagination.module.css'

import { ArrowLeftIcon } from '@/shared/assets/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '@/shared/assets/icons/ArrowRightIcon';
interface PaginationProps{
    update:(value:number)=>void;
    pages:number,
    currentPage:number
}
const Pagination = ({currentPage,pages,update}:PaginationProps) => {
    const limit=pages
   const page=isNaN(currentPage)?1:currentPage
   console.log(page)
    
  
 function getPages() {
  const pages: (number | string)[] = []
  
  
  pages.push(1)
  

  const start = Math.max(2, page - 1)
  const end = Math.min(limit - 1, page + 1)
  

  if (start > 2)pages.push('...')
  

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  

  if (end < limit - 1) pages.push('...')
  

  if (limit > 1) pages.push(limit)
  
  return pages
}

  const pagesGenerate=getPages()


  function updateValues(page:number,action:'increment' | 'decrement' | 'set'){
    if(action=='decrement'){
        if(page>1){
            update(page--)
        }
    }
    if(action=='increment'){
        if(page<limit){
            update(page+1)
        }
    }
    else{
        if(typeof page=='number'){
            update(page)
        }
    }
  }

  
 
    
  return (
    <nav className={styles.pagination}>
        <button onClick={()=>updateValues(page,'decrement')}><ArrowLeftIcon></ArrowLeftIcon></button>
        
        {pagesGenerate.map((p)=>(
            <button onClick={()=>updateValues(p,'set')} className={`${styles.pagination__item} ${page===p?styles.pagination__itemActive:``}`}>
                <p key={p} className={`${styles.pagination__number} ${page===p?styles.pagination__numberActive:``}`}>{p}</p>
            </button>
            
        ))}
      <button onClick={()=>updateValues(page,'increment')}><ArrowRightIcon></ArrowRightIcon></button>
    </nav>
  )
}

export default Pagination
