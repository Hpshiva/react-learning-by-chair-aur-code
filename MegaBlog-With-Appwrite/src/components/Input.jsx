import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label className="inline-block mb-1 pl-1" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          ref={ref}
          id={id}
          className={` px-3 py-2 rounded-lg bg-white text-black outline-none border border-gray-300 w-full ${className}`}
        />
      </div>
    );
  },
);

export default Input;
