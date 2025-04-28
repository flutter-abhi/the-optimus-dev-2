import { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    error,
    helperText,
    required = false,
    disabled = false,
    className = ''
}) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`input-wrapper ${className}`}>
            {label && (
                <label className={`input-label ${required ? 'required' : ''}`}>
                    {label}
                </label>
            )}
            <div className={`input-field ${focused ? 'focused' : ''} ${error ? 'error' : ''}`}>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </div>
            {(error || helperText) && (
                <p className={`helper-text ${error ? 'error' : ''}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
};

export default Input;