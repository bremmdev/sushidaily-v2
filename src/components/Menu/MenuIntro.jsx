import React from "react";
import styles from "./MenuIntro.module.css";

const MenuIntro = () => {
  return (
    <div className={styles['menu-intro']}>
      <h2>Our Menu</h2>
      <p>All dishes have been prepared with the greatest care. Please inform us beforehand of any allergies or dietary restrictions you may have. Enjoy your dinner!</p>
    </div>
  );
};

export default MenuIntro;
