import { usePagination } from '@/features/question-pagination'
import Pagination from '@/shared/ui/Pagination/Pagination'

interface PaginationProps {
  pages: number
  currentPage: number
}

export const QuestionPagination = ({ currentPage, pages }: PaginationProps) => {
  const { getPages, updatePages } = usePagination(currentPage, pages)
  const pagesGenerate = getPages()

  return (
    <Pagination
      page={currentPage}
      pagesGenerate={pagesGenerate}
      updatePages={updatePages}  
    />
  )
}