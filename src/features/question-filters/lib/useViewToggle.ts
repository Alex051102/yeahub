import { useState } from 'react'

export const useViewToggle = (totalCount: number = 5, defaultLimit: number = 5) => {
  const [viewAll, setViewAll] = useState(false)

  const hasMore = totalCount > defaultLimit
  const displayedCount = viewAll ? totalCount : defaultLimit

  return {
    displayedCount,
    hasMore,
    viewAll,
    toggleView: () => setViewAll((prev) => !prev),
  }
}
