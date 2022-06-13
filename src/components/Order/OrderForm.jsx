import React, { useEffect } from "react";
import styles from "./OrderForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice.js";
import useInput from "../../hooks/use-input.js";
import { cartActions } from "../../store/cart-slice.js";
import useFetch from "../../hooks/use-fetch.js";
import { saveOrder } from "../../api/api.js";

const validateText = (value) => {
  return typeof value === 'string' && value.length >= 3
}

const validateEmail = (value) => {
 return value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)?.length > 0
}

const validatePostal = (value) => {
  return value.match(/^[0-9]{4}[a-zA-Z]{2}$/g)?.length > 0
}

const OrderForm = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { error, status, sendRequest } = useFetch(saveOrder);

  const {
    value: name,
    valueIsValid: nameIsValid,
    inputIsInValid: nameInputIsInValid,
    handleInteraction: handleNameInteraction,
    handleChange: handleNameChange,
    resetInput: resetNameInput,
  } = useInput(validateText);

  const {
    value: email,
    valueIsValid: emailIsValid,
    inputIsInValid: emailInputIsInValid,
    handleInteraction: handleEmailInteraction,
    handleChange: handleEmailChange,
    resetInput: resetEmailInput,
  } = useInput(validateEmail);

  const {
    value: street,
    valueIsValid: streetIsValid,
    inputIsInValid: streetInputIsInValid,
    handleInteraction: handleStreetInteraction,
    handleChange: handleStreetChange,
    resetInput: resetStreetInput,
  } = useInput(validateText);

  const {
    value: city,
    valueIsValid: cityIsValid,
    inputIsInValid: cityInputIsInValid,
    handleInteraction: handleCityInteraction,
    handleChange: handleCityChange,
    resetInput: resetCityInput,
  } = useInput(validateText);

  const {
    value: postal,
    valueIsValid: postalIsValid,
    inputIsInValid: postalInputIsInValid,
    handleInteraction: handlePostalInteraction,
    handleChange: handlePostalChange,
    resetInput: resetPostalInput,
  } = useInput(validatePostal);

  //if we submit form, we consider all inputs as 'interacted with'
  const handleAllInputInteractions = () => {
    handleNameInteraction();
    handleEmailInteraction();
    handleStreetInteraction();
    handleCityInteraction();
    handlePostalInteraction();
  };

  const resetForm = () => {
    resetNameInput();
    resetEmailInput();
    resetStreetInput();
    resetCityInput();
    resetPostalInput();
  };

  let formIsValid = false;

  if (nameIsValid && emailIsValid && streetIsValid && cityIsValid && postalIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    handleAllInputInteractions();

    if (formIsValid) {
      const customerData = {
        name,
        email,
        street,
        city,
        postal,
      };

      const orderData = {
        order: cart,
        customer: customerData,
      };

      //send order to Firebase
      sendRequest(orderData);
    }
  };

  const cancelHandler = () => {
    dispatch(uiActions.hideOrderForm());
  };

  useEffect(() => {
    //on error when saving the order, keep cart data
    if (status === "completed" && error) {
      dispatch(
        uiActions.setNotification({
          status: "error",
          message: "Failed to place order",
        })
      );
      dispatch(uiActions.hideFormAndCart());
    }

    //if we successfully saved the order,
    //reset form, clear cart, hide cart
    if (status === "completed" && !error) {
      dispatch(
        uiActions.setNotification({
          status: "success",
          message: "Thank you for your order!",
        })
      );
      resetForm();

      //hide form and cart
      dispatch(uiActions.hideFormAndCart());

      //clear cart data
      dispatch(cartActions.clearCart());
    }
  }, [status]);

  return (
      <form className={styles["order-form"]} onSubmit={submitFormHandler}>
      <div
        className={
          nameInputIsInValid
            ? styles["form-control-invalid"]
            : styles["form-control"]
        }
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          onBlur={handleNameInteraction}
        />
      </div>
      {nameInputIsInValid && (
        <p className="error">Name should be at least 3 characters</p>
      )}
      <div
        className={
          emailInputIsInValid
            ? styles["form-control-invalid"]
            : styles["form-control"]
        }
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailInteraction}
        />
      </div>
      {emailInputIsInValid && (
        <p className="error">Please enter a valid email address</p>
      )}
      <div
        className={
          streetInputIsInValid
            ? styles["form-control-invalid"]
            : styles["form-control"]
        }
      >
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={handleStreetChange}
          onBlur={handleStreetInteraction}
        />
      </div>
      {streetInputIsInValid && (
        <p className="error">Street should be at least 3 characters</p>
      )}
      <div className={styles["form-control-split"]}>
        <div
          className={
            cityInputIsInValid
              ? styles["form-control-invalid"]
              : styles["form-control"]
          }
        >
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={handleCityChange}
            onBlur={handleCityInteraction}
          />
        </div>
        <div
          className={
            postalInputIsInValid
              ? styles["form-control-invalid"]
              : styles["form-control"]
          }
        >
          <label htmlFor="postal">Postal Code</label>
          <input
            type="text"
            id="postal"
            value={postal}
            onChange={handlePostalChange}
            placeholder="1234AB"
            onBlur={handlePostalInteraction}
          />
        </div>
      </div>
      <div>
        {cityInputIsInValid && (
          <p className="error">City should be at least 3 characters</p>
        )}
        {postalInputIsInValid && (
          <p className="error">Postal code is not valid</p>
        )}
      </div>

      <div className={styles["form-action"]}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Place Order</button>
      </div>
    </form>
  );
};

export default OrderForm;
