import React from "react";

const Button = ({
  title,
  isPrimary,
  isSuccess,
  isLight,
  isDisabled,
  size,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      className={`${
        isPrimary &&
        "text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
      } ${
        isSuccess &&
        "text-white bg-green-500 hover:bg-green-600 focus:ring-green-300"
      } ${
        isLight &&
        "text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 focus:ring-slate-200"
      } ${
        isDisabled &&
        "bg-opacity-50 hover:bg-opacity-50 focus:ring-opacity-50 cursor-not-allowed"
      } ${
        size == "extra-small"
          ? "px-3 py-2 text-xs"
          : size == "small"
          ? "px-3 py-2 text-sm"
          : size == "base"
          ? "px-5 py-2.5 text-sm"
          : size == "large"
          ? "px-5 py-3 text-base"
          : size == "extra-large"
          ? "px-6 py-3.5 text-base"
          : null
      } font-medium focus:outline-none focus:ring-4 rounded-full text-center transition-all duration-300 ease-in-out ${className}`}
      onClick={isDisabled ? null : onClick}
      disabled={isDisabled ? true : false}
    >
      {title}
    </button>
  );
};

export default Button;
