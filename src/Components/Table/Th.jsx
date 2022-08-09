const Th = ({ children, className }) => {
    return (
        <th
            scope="col"
            className={`py-3.5 px-3 text-left text-sm font-semibold text-gray-900 ${className}`}
        >
            {children}
        </th>
    );
};

export default Th;