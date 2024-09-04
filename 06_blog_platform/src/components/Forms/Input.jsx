import React, { useId } from "react";

const Input = ({
    label,
    type = "text",
    register,
    error,
    placeholder,
    ...props
}) => {
    const ElementId = useId();
    return (
        <div className="w-full">
            <label className="leading-7 text-base font-bold" htmlFor={ElementId}>
                {label || "Lable"}
            </label>
            <input
                type={type}
                id={ElementId}
                placeholder={placeholder}
                {...props}
                {...register}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {error && <p className="font-semibold text-red-600">{error}</p>}
        </div>
    );
};

export default Input;
