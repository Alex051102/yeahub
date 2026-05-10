import styles from './FilterChip.module.css'
interface FilterChipProps {
  image?: string
  title: string
  selected?: boolean
  onClick: () => void
}
const FilterChip = ({ image, title, selected, onClick }: FilterChipProps) => {
  return (
    <div
      onClick={onClick}
      className={`${selected ? styles.filterChipSelected : ''} ${styles.filterChip}`}
    >
      <div className={styles.filterChip__container}>
        {image ? <img className={styles.filterChip__image} src={image}></img> : ''}
        <p className={styles.filterChip__name}>{title}</p>
      </div>
    </div>
  )
}

export default FilterChip
