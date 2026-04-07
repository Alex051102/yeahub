import React from 'react'
import styles from './FilterSection.module.css'
interface FilterSectionProps{
    children:React.ReactNode,
    title:string,
    count?:number
}
const FilterSection = ({children,title}:FilterSectionProps) => {
  return (
    <section>
        <p>{title}</p>
        <div className={styles.filter}>{children}</div>
    </section>
  )
}

export default FilterSection
