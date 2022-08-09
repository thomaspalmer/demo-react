import { useState, useEffect } from 'react';

import useRefreshToken from 'Hooks/useRefreshToken';

import { Loading } from 'Components/Partials';

const Loader = ({ children }) => {
    const [ loading, setLoading ] = useState(true);
    const refresh = useRefreshToken();

    // attempt to hydrate the user
    useEffect(() => {
        const reloadToken = async () => {
            try {
                await refresh();
            } catch (err) {
                // unset the session to prevent unwanted loops
                sessionStorage.removeItem('refresh_token');
            }

            setLoading(false);
        };

        reloadToken();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <div className="h-screen w-full flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    return children;
};

export default Loader;