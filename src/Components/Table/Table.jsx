const Table = ({ children, className }) => {
    return (
        <table className={`min-w-full divide-y divide-gray-300 ${className}`}>
            {children}
        </table>
    );
};

export default Table;