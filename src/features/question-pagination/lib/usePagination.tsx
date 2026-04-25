import { useQuestionFilters } from "@/features/question-filters"

export const usePagination = (page: number | null | undefined, limit: number) => {
  const { updateFilters } = useQuestionFilters()
  

  const currentPage = typeof page=='number' ? page : 1

  const getPages = () => {
  const pages: (number | string)[] = []

  pages.push(1)
  
 
  if (limit === 1) return pages
  
  
  if (limit === 2) {
    pages.push(2)
    return pages
  }
  
  
  if (currentPage <= 2) {
    pages.push(2, 3)
    if (limit > 3) pages.push('...')
    pages.push(limit)
    return pages
  }
  

  if (currentPage >= limit - 1) {
    pages.push('...')
    for (let i = limit - 2; i <= limit; i++) {
      if (i !== 1) pages.push(i)
    }
    return pages
  }
  
  
  pages.push('...')
  pages.push(currentPage - 1, currentPage, currentPage + 1)
  pages.push('...')
  pages.push(limit)
  
  return pages
}

  const updatePages = (newPage: number) => {
    if (isNaN(newPage) || newPage < 1 || newPage > limit) return
    updateFilters('page', newPage)
  }

  return { getPages, updatePages, currentPage }
}