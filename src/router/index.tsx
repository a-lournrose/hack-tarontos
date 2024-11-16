import {BrowserRouter, Route, Routes} from "react-router-dom";
import {FC} from "react";
import {privateRoutes, publicRoutes} from "@/router/routes.tsx";
import ProtectedRoute from "@/router/ProtectedRoute.tsx";

export const Router: FC = () => (
    <BrowserRouter>
        <Routes>
            {publicRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}

            <Route element={<ProtectedRoute />}>
                {privateRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element}>
                        {route?.children?.map((child, childIndex) => (
                            <Route key={childIndex} path={child.path} element={child.element} />
                        ))}
                    </Route>
                ))}
            </Route>
        </Routes>
    </BrowserRouter>
);