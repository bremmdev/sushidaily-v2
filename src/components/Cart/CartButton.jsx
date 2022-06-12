import React from 'react'
import styles from './CartButton.module.css'
import CartIcon from '../UI/Icons/CartIcon.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice.js'

const CartButton = () => {

  const menuItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const numberOfItems = menuItems.reduce((x, y) => x + y.amount, 0)

  const showCartHandler = () => {
    dispatch(uiActions.showCart())
  }

  const cartButtonClasses = `${styles['cart-button']} flex-between align-center`

  return (
    <div className={cartButtonClasses} onClick={showCartHandler}>
      <CartIcon className={styles['cart-icon']}/>
      <div>Cart</div>
      <div className={styles['cart-button__amount']}>{numberOfItems}</div>
    </div>
  )
}

export default CartButton