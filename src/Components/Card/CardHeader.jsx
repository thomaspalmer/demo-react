/**
 * @function CardHeader
 * @param {JSX.Element} children
 * @param {string} className
 * @return {JSX.Element}
 * @constructor
 */
 const CardHeader = ({ children, className }) => {
    return (
        <div className={`bg-white px-4 py-5 border-b border-gray-200 sm:px-6 ${className}`}>
            {children}
        </div>
    );
};

export default CardHeader;