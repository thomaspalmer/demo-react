import Auth from 'Components/Guards/Auth';
import Guest from 'Components/Guards/Guest';

const guards = {
    'auth': Auth,
    'guest': Guest,
};

export default guards;