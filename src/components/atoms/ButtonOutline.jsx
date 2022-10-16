import React from "react";

const ButtonOutline = ({ children, text, ...props }) => {
  return (
    <>
      <button
        {...props}
        className="rounded-md border border-blue-700 focus:ring-4 focus:ring-blue-300 hover:bg-blue-800 text-slate-700 hover:text-white px-7 py-3 md:text-lg text-sm font-semibold transition-all duration-300 ease-in-out"
      >
        {text}
        {children}
      </button>
    </>
  );
};

export default ButtonOutline;
