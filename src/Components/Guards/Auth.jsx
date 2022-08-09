import { Navigate, useLocation } from 'react-router-dom';

import useAuth from 'Hooks/useAuth';

const Auth = ({ children }) => {
    const location = useLocation();
    const { auth } = useAuth();

    if (!auth.accessToken) {
        return (
            <Navigate
                to="/login"
                state={{
                    from: location,
                }}
                replace
            />
        );
    }

    return children;
};

export default Auth;