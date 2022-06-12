import React, { useState } from "react";

const useInput = (validateFn) => {
  //state for entered value and interaction with input
  const [value, setValue] = useState("");
  const [isInteractedWith, setIsInteractedWith] = useState(false);

  //derived states for validity of value and input itself
  const valueIsValid = validateFn(value);
  const inputIsInValid = !valueIsValid && isInteractedWith;

  const handleInteraction = () => {
    setIsInteractedWith(true);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue("");
    setIsInteractedWith(false);
  };

  return {
    value,
    valueIsValid,
    inputIsInValid,
    handleInteraction,
    handleChange,
    resetInput,
  };
};

export default useInput;
