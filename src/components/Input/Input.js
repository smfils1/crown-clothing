import React from "react";

import "./Input.scss";

const Input = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {label && (
                <label
                    className={`${
                        otherProps.value.length ? "shrink" : ""
                    } form-input-label`}
                    htmlFor={label}
                >
                    {label}
                </label>
            )}            
        </div>
    );
};

export default Input;
