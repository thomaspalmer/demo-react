/**
 * @function CardHeader
 * @param {JSX.Element} children
 * @param {string} className
 * @param {string} headerClassName
 * @return {JSX.Element}
 * @constructor
 */
 const CardHeader = ({ children, className, headerClassName }) => {
    return (
        <div className={`bg-white px-4 py-5 border-b border-gray-200 sm:px-6 ${className}`}>
            <h3 className={`text-lg leading-6 font-medium text-gray-900 ${headerClassName}`}>
                {children}
            </h3>
        </div>
    );
};

export default CardHeader;