const Td = ({ children, className }) => {
    return (
        <td
            className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${className}`}
        >
            {children}
        </td>
    );
};

export default Td;