const Tbody = ({ children, className }) => {
    return (
        <tbody className={`bg-white ${className}`}>
            {children}
        </tbody>
    );
};

export default Tbody;