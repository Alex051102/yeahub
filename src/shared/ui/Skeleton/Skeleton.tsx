import { cn } from "@/shared/lib"
import styles from './Skeleton.module.css'
interface SkeletonProps{
    className?:string,
    width:string,
    height:string,
    borderRadius?:string
}
const Skeleton = ({className,width,height,borderRadius}:SkeletonProps) => {
  return (
    <div style={{borderRadius:borderRadius, width:width,height:height}} className={cn(styles.skeleton,className)}>
      
    </div>
  )
}

export default Skeleton
