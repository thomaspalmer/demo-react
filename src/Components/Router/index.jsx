import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from 'Config/routes';
import guards from 'Config/guards';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, key) => (
                    <Route 
                        key={key}
                        path={route.path}
                        element={
                            <RenderRouteThroughGuard
                                guards={route.guards ?? []}
                                key={key}
                            >
                                <route.component />
                            </RenderRouteThroughGuard>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
};

const RenderRouteThroughGuard = ({ children, guards: routeGuards, previousGuard = false }) => {
    if (routeGuards.length === 0) {
        return children;
    }

    let guard = null;

    if (previousGuard !== false) {
        const lastGuardIndex = routeGuards.indexOf(previousGuard);
        guard = routeGuards[lastGuardIndex + 1];
    } else {
        guard = routeGuards[0];
    }

    const guardParts = guard.split(':'); // 0 is the guard, 1 is comma separated parameters
    const guardToCall = guardParts[0];
    const guardParameters = guardParts[1] ? guardParts[1].split(',') : [];

    const Component = guards[guardToCall];
    const hasMoreGuards = routeGuards.length > (routeGuards.indexOf(guard) + 1);

    return (
        <Component 
            parameters={guardParameters}
        >
            {hasMoreGuards ? (
                <RenderRouteThroughGuard guards={routeGuards}> 
                    {children}
                </RenderRouteThroughGuard>
            ) : children}
        </Component>
    );
};

export default Router;