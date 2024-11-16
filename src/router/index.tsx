import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FC} from "react";
import {privateRoutes, publicRoutes} from "@/router/routes.tsx";
import ProtectedRoute from "@/router/ProtectedRoute.tsx";

export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            {/* Маппинг публичных маршрутов */}
            {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
            ))}

            {/* Маппинг приватных маршрутов через ProtectedRoute */}
            <Route element={<ProtectedRoute/>}>
                {privateRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}/>
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
);