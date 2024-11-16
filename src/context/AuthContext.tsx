import {createContext, ReactNode, useContext, useEffect, useState} from "react";

export type Token = {
    accessToken: string;
}
interface IAuthContext {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    register: () => void;
}

interface IAuthProvider {
    children: ReactNode;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({children}: IAuthProvider) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            // Запрос на получение инфы от пользователя
            setIsAuthenticated(true);
        }
    }, [])

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    const register = () =>{
        setIsAuthenticated(true);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = (): IAuthContext => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен быть использован внутри AuthProvider');
    }
    return context;
};
