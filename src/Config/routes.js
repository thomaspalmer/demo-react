import Login from 'Pages/Auth/Login';

import Users from 'Pages/Users';

const routes = [
    { path: '/', component: Users, guards: ['auth'] },

    { path: '/login', component: Login, guards: ['guest'] },
];

export default routes;