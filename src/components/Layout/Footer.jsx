import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "../UI/Icons/InstagramIcon.jsx";
import FacebookIcon from "../UI/Icons/FacebookIcon.jsx";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h1>Sushidaily</h1>
        <div className={styles["footer-icons"]}>
          <a href=""><InstagramIcon className={styles['footer-icon']}/></a>
          <a href=""><FacebookIcon className={styles['footer-icon']}/></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
