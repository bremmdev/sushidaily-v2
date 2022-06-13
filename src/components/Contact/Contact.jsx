import React from "react";
import styles from "./Contact.module.css";
import RestaurantImgUrl from "../../assets/restaurant.png";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <h2>Find Us</h2>
        <div className={styles["contact-inner"]}>
          <div>
            <p>Visit us at <span className={styles.address}>Van der Burglaan 242, 1042LP Amsterdam</span></p>
            <p>Opening hours:</p>
            <ul>
              <li>
                Monday - Friday <span>18:00 - 23:00</span>
              </li>
              <li>
                Saturday <span>17:00 - 00:00</span>
              </li>
              <li>
                Sunday <span>18:00 - 00:00</span>
              </li>
            </ul>
          </div>
          <img src={RestaurantImgUrl} className={styles['contact-img']} alt="chef cooking in restaurant" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
