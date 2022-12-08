import React from "react";

export default function Button({
  type = "submit",
  className = "",
  processing,
  children,
}) {
  return (
    <button
      type={type}
      className={
        `inline-flex items-center px-11 py-3 text-poppins bg-primary drop-shadow-xl hover:bg-blue-600  border border-transparent rounded-md font-medium text-lg text-white tracking-widest active:bg-blue-800 transition ease-in-out duration-150 ${
          processing && "opacity-25"
        } ` + className
      }
      disabled={processing}
    >
      {children}
    </button>
  );
}
