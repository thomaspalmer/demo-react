import { Navigate } from 'react-router-dom';

import useAuth from 'Hooks/useAuth';

const Guest = ({ children }) => {
    const { auth } = useAuth();

    if (auth.accessToken) {
        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return children;
};

export default Guest;