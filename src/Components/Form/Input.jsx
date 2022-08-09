import React from 'react';

import Label from './Label';
import RawInput from './RawInput';

/**
 * @function Input
 * @param {string} containerClassName
 * @param {string} className
 * @param {string} type
 * @param {string} label
 * @param {string} id
 * @param {function} onChange
 * @param {mixed} value
 * @param {?string} error
 * @return {JSX.Element}
 */
const Input = React.forwardRef(({
    containerClassName,
    className,
    type = 'text',
    label,
    id,
    onChange,
    value,
    error = null,
    ...rest
}, ref) => {
    const classes = `
        focus:ring-app-primary-focus focus:border-app-primary-focus block w-full border shadow-sm py-2 px-3 focus:outline-none sm:text-sm
        rounded-md
        ${error ? 'border-red-800' : 'border-gray-300'} 
        ${className}
    `;

    return (
        <div className={`space-y-1 ${containerClassName}`}>
            {label && (
                <Label 
                    label={label} 
                    htmlFor={id} 
                    error={error}
                />
            )}

            <RawInput
                ref={ref}
                type={type}
                id={id}
                value={value ?? ''}
                onChange={onChange}
                className={classes}
                {...rest}
            />
        </div>
    );
});

export default Input;