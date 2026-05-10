import React from 'react'
import styles from './FilterSection.module.css'
import { cn } from '@/shared/lib'
interface FilterSectionProps{
    children:React.ReactNode,
    title:string,
    count?:number,
    classname?:string
}
const FilterSection = ({classname,children,title}:FilterSectionProps) => {
  return (
    <section className={cn(styles.filterSection,styles[classname ?? ''])}>
        <p className={styles.filterSection__title}>{title}</p>
        <div className={styles.filter}>{children}</div>
    </section>
  )
}

export default FilterSection
