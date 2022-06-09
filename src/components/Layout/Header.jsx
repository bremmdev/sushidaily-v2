import React from 'react'
import styles from './Header.module.css'
import CartButton from '../Cart/CartButton.jsx'


const Header = () => {
  return (
    <header className={styles.header}>
       <div className="container flex-between align-center">
         <h1>Sushidaily</h1> 
         <CartButton/>
         </div> 

    </header>
  )
}

export default Header