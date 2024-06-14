import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder, name }, ref) => {
    return (
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default Input;
