import React from "react";

import "./Input.scss";

const Input = ({ handleChange, label, id, ...otherProps }) => {
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
                    htmlFor={id}
                >
                    {label}
                </label>
            )}            
        </div>
    );
};

export default Input;
