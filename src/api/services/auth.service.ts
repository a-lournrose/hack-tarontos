import axios from "axios";
import {Token} from "@/context/AuthContext.tsx";

export interface RegisterData {
    email: string;
    password: string;
    name: string;
    surname: string;
    patronymic: string;
    role: "Administrator" | "Recruiter";
}

export interface LoginData {
    email: string,
    password: string
}

export class AuthService {
    static async register(user: RegisterData) {
        const response = await axios.post<Token>('https://tarohackathon.duckdns.org/api/auth/register', user);
        return response.data;
    }

    static async login(user: LoginData) {
        const response = await axios.post<Token>('https://tarohackathon.duckdns.org/api/auth/login', user);
        return response.data;
    }
}