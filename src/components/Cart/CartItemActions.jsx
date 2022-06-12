import React from "react";
import styles from "./CartItemActions.module.css";

const CartItemActions = (props) => {
 
  const addHandler = () => {
    props.onAdd()
  }

  const removeHandler = () => {
    props.onRemove()
  }

  return (
    <div className={"card-item-action"}>
      <button className={styles['cart-action-btn']} onClick={addHandler}>+</button>
      <button className={styles['cart-action-btn']} onClick={removeHandler}>-</button>
    </div>
  );
};

export default CartItemActions;
