import React from "react";

const Input = ({ ...props }) => {
  return (
    <>
      <input
        {...props}
        className={`bg-slate-50/50 border border-slate-300 text-slate-700 text-sm rounded-lg focus:ring-blue-700 focus:border-blue-700 block w-full p-2.5 transition-all duration-300 ease-in-out`}
      />
    </>
  );
};

export default Input;
