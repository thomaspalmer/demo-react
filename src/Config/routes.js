import Login from 'Pages/Auth/Login';

import Users from 'Pages/Users';
import PermissionDenied from 'Pages/Auth/PermissionDenied';

const routes = [
    { path: '/', component: Users, guards: ['auth'] },

    { path: '/permission-denied', component: PermissionDenied, guards: ['auth'] },

    { path: '/login', component: Login, guards: ['guest'] },
];

export default routes;