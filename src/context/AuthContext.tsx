import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {AuthService, LoginData, RegisterData} from "@/api/services/auth.service.ts";

export type Token = {
    accessToken: string;
}
interface IAuthContext {
    isAuthenticated: boolean;
    login: (user: LoginData) => void;
    logout: () => void;
    register: (user: RegisterData) => void;
}

interface IAuthProvider {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const login = async (user: LoginData) => {
        const response = await AuthService.login(user);
        localStorage.setItem('token', response.accessToken);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    const register = async (user: RegisterData) => {
        const response = await AuthService.register(user);
        localStorage.setItem('token', response.accessToken);
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен быть использован внутри AuthProvider');
    }
    return context;
};
