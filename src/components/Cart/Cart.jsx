import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import CartItem from "./CartItem.jsx";
import OrderForm from "../Order/OrderForm.jsx";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const uiState = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const totalAmount = `€${cart.totalAmount.toFixed(2)}`;

  const closeCartHandler = () => {
    dispatch(uiActions.hideCart());
  };

  const startOrderHandler = () => {
    dispatch(uiActions.showOrderForm())
  }

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
          {cart.items.length > 0 && <button className={styles["order-btn"]} onClick={startOrderHandler}>Order</button>}
        </div>
      </div>
     {uiState.showOrderForm && <OrderForm />}
    </Modal>
  );
};

export default Cart;
