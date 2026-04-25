import { useState } from 'react'
import styles from './Header.module.css'
import {LINKS} from '../../../shared/constants'
import type {LINKSObj} from '../../../shared/constants'
import { NavLink } from 'react-router-dom'
import { Button } from '../../../shared/ui'
import { Container } from '../../../shared/ui/Container/Container'
import { Logo } from '../../../shared/ui/Logo/Logo'
import { ROUTES } from '../../../shared/config'
import { Drawer } from '../../../shared/ui/Drawer/Drawer'
import { ChevronDownIcon } from '../../../shared/assets/icons/ChevronDownIcon'
import { BurgerIcon } from '../../../shared/assets/icons/BurgerIcon'

export const Header=()=> {
  const [isBurgerOpen,setBurgerOpen]=useState(false)
  const [isgroupMenuOpen,setGroupMenuOpen]=useState(false)

  const openBurgerMenu=()=>{
    setBurgerOpen(prev=>!prev)
    setGroupMenuOpen(false)
  }
   const openGroupMenu=()=>{
    setGroupMenuOpen(prev=>!prev)
    setBurgerOpen(false)
  }
  const closeAllMenus =()=>{
    setBurgerOpen(false)
    setGroupMenuOpen(false)
  }
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <div className={styles.header__right}>
           
          <Logo/>
          <nav className={styles.header__nav}>
            {LINKS.map((l)=>(
        <NavLink className={styles.header__navItem} key={l.to} to={l.to}>
          {l.label}
        </NavLink>
        
      ))}
          </nav>

          <nav className={styles.header__groupNav} onClick={openGroupMenu}>
            <p>Подготовка</p>
           <ChevronDownIcon
									className={`${styles.chevron} ${isgroupMenuOpen ? styles.chevronActive : ''}`}
								/>
          </nav>
          <Drawer
          isOpen={isgroupMenuOpen}
          onClose={() => setGroupMenuOpen(false)}
         className={styles.header__groupMenuDrawer}
         
        >
          
           <nav className={styles.header__navMobile}>
            {LINKS.map((l:LINKSObj)=>(
        <NavLink className={styles.header__navItemMobile} key={l.to} to={l.to} onClick={closeAllMenus}>
          {l.label}
        </NavLink>
        
      ))}
          </nav>
        </Drawer>
      
        </div>
        <div onClick={openBurgerMenu} className={styles.header__burgerIcon}>
            <BurgerIcon></BurgerIcon>
          </div>
          <Drawer
          isOpen={isBurgerOpen}
          onClose={() => setBurgerOpen(false)}
          className={styles.header__burgerMenuDrawer}
         
        >
          <div className={styles.header__burger}>
            <NavLink to={ROUTES.LOGIN} className={styles.header__burgerItem}>
            Вход
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className={styles.header__burgerItem}>
            Регистрация
          </NavLink>
          </div>
          
        </Drawer>
        <div className={styles.header__left}>
          
          
          <NavLink to={ROUTES.LOGIN} className={styles.header__login}>
            Вход
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className={styles.header__login}>
           <Button className={styles.registerLink} variant='primary'>Регистрация</Button>
          </NavLink>
        </div>
        </div>
        
        
      </Container>
      
      

    </header>
  )
}
