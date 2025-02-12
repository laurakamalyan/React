import React from "react";

function Input({type, name, validateErr, formData, handleFocus, handleChange, handleBlur}) {
    return (
        <div>
            <label htmlFor={name}> {name} </label>
            <input
                id={name}
                type={type}
                value={formData}
                name={name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <p className="err">
                {validateErr}
            </p>
        </div>
    )
}

export default Input;