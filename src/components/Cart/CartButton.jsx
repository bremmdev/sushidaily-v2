import React from 'react'
import styles from './CartButton.module.css'
import CartIcon from '../UI/Icons/CartIcon.jsx'

const CartButton = () => {

  const cartButtonClasses = `${styles['cart-button']} flex-between align-center`

  return (
    <div className={cartButtonClasses}>
      <CartIcon className={styles['cart-icon']}/>
      <div>Cart</div>
      <div className={styles['cart-button__amount']}>5</div>
    </div>
  )
}

export default CartButton