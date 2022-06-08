import React from "react";

const QuoteIcon = (props) => {
  return (
    <svg className={props.className} viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 11C13.5 12.933 15.067 14.5 17 14.5L20.5 18V11C20.5 9.067 18.933 7.5 17 7.5C15.067 7.5 13.5 9.067 13.5 11Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 11C3.5 12.933 5.067 14.5 7 14.5L10.5 18V11C10.5 9.067 8.933 7.5 7 7.5C5.067 7.5 3.5 9.067 3.5 11Z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuoteIcon;
