import {RouteObject} from "react-router-dom";
import {HomePage} from "@/pages/HomePage.tsx";
import {AuthPage} from "@/pages/AuthPage.tsx";
import {MainLayout} from "@/layouts/MainLayout.tsx";
import WorkersPage from "@/pages/WorkersPage/WorkersPage.tsx";

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
        path: '/app',
        element: <MainLayout/>,
        children: [
            {
                path: 'workers',
                element: <WorkersPage/>,
            }
        ]
    },
];