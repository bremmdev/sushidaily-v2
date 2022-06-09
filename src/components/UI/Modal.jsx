import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {

  //only close modal if we click outside of the modal (on the overlay)
  const closeHandler = (e) => {
    if (e.target.classList[0] && e.target.classList[0].indexOf("overlay") !== -1) {
      props.onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={closeHandler}>
      <div className={styles.modal}>{props.children}</div>
    </div>
  );
};

export default Modal;
