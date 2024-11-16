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
        try{
            const response = await axios.post<Token>('https://tarohackathon.duckdns.org/api/auth/register', user);
            localStorage.setItem("token", response.data.accessToken);
        }
        catch (error){
            if(error instanceof Error) {
                throw new Error("Failed to register: " + error.message);
            } else{
                throw new Error("Failed to register: unknown error");
            }
        }
    }

    static async login(user: LoginData) {
        try{
            const response = await axios.post<Token>('https://tarohackathon.duckdns.org/api/auth/login', user);
            localStorage.setItem("token", response.data.accessToken);
        }
        catch(error){
            if(error instanceof Error){
                console.log("dsfjsdf");
                throw new Error("Failed to login: " + error.message);
            } else{
                throw new Error("Failed to login: unknown error")
            }
        }
    }
}