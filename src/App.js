import Loader from 'Components/Loader';
import Router from 'Components/Router';

import { AuthProvider } from 'Context/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Loader>
                <Router />
            </Loader>
        </AuthProvider>
    );
};

export default App;
