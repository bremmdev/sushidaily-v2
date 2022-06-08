import { useReducer, useCallback } from "react";

const fetchReducer = (state, action) => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  return state;
};

const useFetch = (requestFn, startPending = false) => {
  const [fetchState, dispatch] = useReducer(fetchReducer, {
    data: null,
    error: null,
    status: startPending ? "pending" : null,
  });

  const sendRequest = useCallback(
    async function (requestData) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFn(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFn]
  );

  return {
    sendRequest,
    ...fetchState,
  };
};

export default useFetch;
