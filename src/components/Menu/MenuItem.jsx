import React from "react";
import styles from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm.jsx";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice.js";

const MenuItem = (props) => {

  const dispatch = useDispatch()

  const price = `€${props.item.price.toFixed(2)}`

  const addItemHandler = () => {
    //add to cart here
    const itemToAdd = {
      id: props.id,
      title: props.item.title,
      description: props.item.description,
      price: +props.item.price
    }

    dispatch(cartActions.addItemToCart(itemToAdd))
  }

  return (
    <li className={styles["menu-item"]}>
      <div className={styles["menu-item__inner"]}>
        <div>{props.item.title}</div>
        <div className={styles["menu-item__description"]}>{props.item.description}</div>
      </div>
      <div className={styles["menu-item__price"]}>
        {price}
        <MenuItemForm onAddItem={addItemHandler}/>
      </div>
   
    </li>
  );
};

export default MenuItem;
