import styles from './InfoBlock.module.css'
import tg from '@/shared/assets/icons/Telegram.svg'
import youtube from '@/shared/assets/icons/Youtube.svg'
import profile from '@/shared/assets/icons/Profile.svg'
import author from '@/shared/assets/icons/author.svg'
export const InfoBlock = () => {
  return (
    <div className={styles.infoBlock__container}>
      <div className={styles.infoBlock}>
        <div className={styles.infoBlock__author}>
          <img className={styles.infoBlock__authorImage} src={author} alt="" />
          <div className={styles.infoBlock__authorInfo}>
            <p className={styles.infoBlock__text}>Руслан Куянец</p>
            <p className={`${styles.infoBlock__text} ${styles.infoBlock__textGrey}`}>Python Guru</p>
          </div>
        </div>

        <p className={styles.infoBlock__text}>
          Guru – это эксперты YeaHub, которые помогают развивать комьюнити.
        </p>
        <div className={styles.infoBlock__social}>
          <img src={tg} alt="telegram" />
          <img src={youtube} alt="youtube" />
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  )
}
