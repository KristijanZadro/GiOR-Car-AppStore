import { generatePath } from "react-router";
import { Cars } from "../Cars/Cars";
import { Login } from "../Login/Login";

export const routesConfiguration = {
    CARS: {
        id: 'CARS',
        path: '/cars',
        Component: Cars,
    },
    LOGIN: {
        id: 'LOGIN',
        path: '/',
        Component: Login,
    }
}

export function generateLink(routeOrRouteId, params) {
    let route;
    if (typeof routeOrRouteId.id === 'string') {
        route = routesConfiguration[routeOrRouteId.id];
    }
    if (!route) {
        console.error(`Route not found error. Can't generate link for unknown route ${routeOrRouteId}`);
        return '#';
    }
    return generatePath(route.path, params);
}
