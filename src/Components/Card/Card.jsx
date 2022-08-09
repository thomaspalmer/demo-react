/**
 * @function Card
 * @param {JSX.Element} children
 * @param {string} className
 * @return {JSX.Element}
 * @constructor
 */
 const Card = ({ children, className }) => {
    return (
        <div className={`bg-white overflow-hidden sm:shadow w-full rounded-md${className}`}>
            {children}
        </div>
    );
};

export default Card;