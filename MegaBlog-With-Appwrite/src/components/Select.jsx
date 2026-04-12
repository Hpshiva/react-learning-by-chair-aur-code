import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rouned-lg text-black`}
      ></select>

      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </div>
  );
}

export default React.forwardRef(Select);
