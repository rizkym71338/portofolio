import React from "react";

const ButtonFIll = ({ children, text, ...props }) => {
  return (
    <>
      <button
        {...props}
        className="bg-blue-700 rounded-md focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 text-white px-7 py-3 text-sm md:text-lg font-semibold transition-all duration-300 ease-in-out"
      >
        {text}
        {children}
      </button>
    </>
  );
};

export default ButtonFIll;
