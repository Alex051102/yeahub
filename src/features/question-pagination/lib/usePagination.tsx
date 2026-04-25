
import { useQuestionFilters } from "@/features/question-filters"

export const usePagination = (page: number, limit: number) => {
  const { updateFilters } = useQuestionFilters()
  
  const currentPage = page && !isNaN(page) ? page : 1

  const getPages = () => {
    const pages: (number | string)[] = []
    
    if (limit <= 1) return pages  
    
    pages.push(1)

    const start = Math.max(2, currentPage - 1)
    const end = Math.min(limit - 1, currentPage + 1)

    if (start > 2) pages.push('...')

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    if (end < limit - 1) pages.push('...')

    if (limit > 1 && pages[pages.length - 1] !== limit) {
      pages.push(limit)
    }

    return pages
  }

  const updatePages = (newPage: number) => {
    if (newPage < 1 || newPage > limit) return
    updateFilters('page', newPage)
  }

  return { getPages, updatePages }
}