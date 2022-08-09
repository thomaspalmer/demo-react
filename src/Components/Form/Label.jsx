import React, { Fragment } from 'react';

/**
 * @function Label
 * @param {string} label
 * @param {string} htmlFor
 * @param {string} className
 * @param {null|array} error
 * @return {JSX.Element}
 * @constructor
 */
const Label = ({ label, htmlFor, className,  error = null }) => {
    const classes = `
        block text-sm font-medium leading-5 
        ${error ? 'text-red-800' : 'text-gray-700'} 
        ${className}
    `;
    
    return (
        <div className={`${classes} flex flex-row items-center`}>
            <label htmlFor={htmlFor}>
                {label}

                {error && (
                    <Fragment>
                        {` - ${error.join(' ')}`}
                    </Fragment>
                )}
            </label>
        </div>
    )
};

export default Label;