const Authenticated = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
};

export default Authenticated;