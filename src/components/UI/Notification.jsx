import React from "react";
import styles from "./Notification.module.css";
import CloseIcon from "./Icons/CloseIcon.jsx";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";

const Notification = (props) => {

  const dispatch = useDispatch()

  const closeNotificationHandler = () => {
    dispatch(uiActions.clearNotification())
  }

  const notificationClasses =
    props.status === "error"
      ? `${styles["notification-inner"]} ${styles.error}`
      : `${styles["notification-inner"]} ${styles.success}`;

  return (
    <div className={styles.notification} onClick={closeNotificationHandler}>
      <div className={notificationClasses}>
        <p>{props.message}</p>
        <button>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Notification;
