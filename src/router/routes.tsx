import {RouteObject} from "react-router-dom";
import {HomePage} from "@/pages/HomePage.tsx";
import {AuthPage} from "@/pages/AuthPage.tsx";

export const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage/>,
    },
    {
        path: '/auth',
        element: <AuthPage/>,
    },
];

export const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: '123',
    },
    {
        path: '/login',
        element: '123',
    },
];