import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import CartItem from "./CartItem.jsx";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalAmount = `€${cart.totalAmount.toFixed(2)}`;

  const closeCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  let cartContent = <p className="centered-0m">There are currently no items in your cart.</p>

  if(cart.items && cart.items.length > 0){
    cartContent = <ul>{cart.items.map(item => <CartItem key={item.id} item={item} />)}</ul>
  }

  return (
    <Modal onClose={closeCartHandler}>
      <div className={styles.cart}>
        {cartContent} 
        <p className={styles["cart-amount"]}>Total amount: <span>{totalAmount}</span></p>

        <div className={styles["cart-actions"]}>
          <button className={styles["close-btn"]} onClick={closeCartHandler}>Close</button>
          {cart.items.length > 0 && <button className={styles["order-btn"]}>Order</button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
