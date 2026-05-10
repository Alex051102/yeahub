import { useAdaptive } from '@/shared/lib'
import { Drawer } from '../Drawer/Drawer'
import styles from './SideBar.module.css'
import close from '@/shared/assets/icons/close-icon.svg'
interface SideBarProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}
const SideBar = ({ children, isOpen, onClose }: SideBarProps) => {
  const { isMobile } = useAdaptive()

  return (
    <div className={styles.sideBar}>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <div className={styles.sideBar__container}>
          {isMobile ? (
            <div className={styles.filters__exitBlock}>
              <img onClick={onClose} src={close} alt="" />
            </div>
          ) : (
            ''
          )}
          {children}
        </div>
      </Drawer>
    </div>
  )
}

export default SideBar
