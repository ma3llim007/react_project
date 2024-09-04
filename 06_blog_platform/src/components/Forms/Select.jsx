import React, { useId } from "react";

const Select = ({ label, options, title, placeholder = "", register, error, ...props }) => {
    const ElementId = useId();
    return (
        <div className="w-full">
            <label className="leading-7 text-base font-bold" htmlFor={ElementId}>
                {label}
            </label>
            <select
                id={ElementId}
                title={title}
                placeholder={placeholder}
                {...register}
                {...props}
                className="w-full bg-gray-600 focus:ring-2 focus:ring-white rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-white py-2 px-3 leading-7 transition-colors duration-200 ease-in-out"
            >
                <option value="">Select The {label}</option>
                {options.map((value) => (
                    <option key={value?.id} value={value?.id}>
                        {value?.authorName || value?.title}
                    </option>
                ))}
            </select>
            {error && <p className="font-semibold text-red-600">{error}</p>}
        </div>
    );
};

export default Select;
