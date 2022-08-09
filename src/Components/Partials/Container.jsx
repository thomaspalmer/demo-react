const Container = ({ children, sizeClassName, className }) => {
    return (
        <div className={`mx-auto w-full ${sizeClassName ?? 'max-w-7xl'} ${className}`}>
            {children}
        </div>
    );
};

export default Container;