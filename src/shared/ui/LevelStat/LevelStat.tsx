import styles from './LevelStat.module.css'
interface LevelStatProps{
    stat:number | undefined,
    name:string
    
}
const LevelStat = ({stat,name}:LevelStatProps) => {
  return (
    <div className={styles.stat}>
                  <div className={styles.statContainer}>
                    <p className={styles.statText}>{name}: </p>
                    <div className={styles.statNumber}>
                      <p>{stat ?? 1}</p>
                    </div>
                </div>
                </div>
  )
}

export default LevelStat
