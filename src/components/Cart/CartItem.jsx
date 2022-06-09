import React from "react";
import styles from "./CartItem.module.css";
import CartItemActions from "./CartItemActions.jsx";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice.js";

const CartItem = (props) => {

  const dispatch = useDispatch()
  const totalPrice = `€${(props.item.price * props.item.amount).toFixed(2)}`

  const addItemHandler = () => {
    const itemToAdd = {
      id: props.item.id,
      title: props.item.title,
      description: props.item.description,
      price: +props.item.price
    }

    dispatch(cartActions.addItemToCart(itemToAdd))
  }

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(props.item.id))
  }

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["cart-item__inner"]}>
        <div>{props.item.title} {`(x${props.item.amount})`}</div>
        <div className={styles["cart-item__price"]}>{totalPrice}</div>
      </div>
      <CartItemActions onAdd={addItemHandler} onRemove={removeItemHandler}/>
    </li>
  );
};

export default CartItem;
