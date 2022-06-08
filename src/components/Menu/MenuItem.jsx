import React from "react";
import styles from "./MenuItem.module.css";
import MenuItemForm from "./MenuItemForm.jsx";

const MenuItem = (props) => {

  const price = `€${props.item.price.toFixed(2)}`

  const addItemHandler = () => {
    //add to cart here
    console.log(props.id)
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
