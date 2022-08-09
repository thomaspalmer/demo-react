import{ useEffect, useRef, forwardRef, useState } from 'react';

/**
 * @function RawInput
 * @param {string} type
 * @param {*} value
 * @param {?number} debounce
 * @param {function} onChange
 * @return {JSX.Element}
 */
const RawInput = ({ type, value, debounce, onChange, ...rest }, ref) => {
    const [timeout, updateTimeout] = useState(null);
    const [valueState, setValueState] = useState(value);

    // update the value state when the value prop changes.
    const prevInput = useRef();
    useEffect(() => {
        if (prevInput.current !== value) {
            setValueState(value);
        }

        prevInput.current = value;
    }, [value]);

    // handles value update, will debounce if debounce is set.
    const handleChange = (e) => {
        const valueState = type === 'file' ? e.target.files : e.target.value;
        setValueState(valueState);

        const time = parseInt(debounce);

        if ((!debounce || isNaN(time)) && onChange) {
            return onChange(e);
        }

        clearTimeout(timeout);
        
        updateTimeout(setTimeout(() => {
            if (onChange) {
                onChange(e);
            }
        }, time));
    };

    return (
        <input
            {...rest}
            type={type}
            ref={ref}
            value={valueState ?? value ?? ''}
            onChange={handleChange}
        />
    );
}

export default forwardRef(RawInput);