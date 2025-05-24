"use client";

import api from "@/services/api";
import { getUser, loginUserService, registerUserService } from "@/services/auth.service";
import { AuthContextInterface, LoginUserData, RegisterUserData, User } from "@/types/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoged, setIsLoged] = useState<boolean>(false);
    const [token, setToken] = useState<string | null>(null);
    
    const router = useRouter();

    useEffect(() => {
        if (typeof window === "undefined") return;
        const storedToken = localStorage.getItem("@token");
        const userId = localStorage.getItem("@userId");

        if (storedToken && userId) {
            setToken(storedToken);
            setIsLoged(true);
            api.defaults.headers.common ['Authorization'] = `Bearer ${storedToken}`;
        }

        const fetchData = async () => {
            if (storedToken && userId) {
                try {
                    const response = await getUser(Number(userId));
                    setUser(response);
                } catch (error: any) {
                    if(error.response.status === 401) 
                    {
                        setUser(null);
                        localStorage.clear();
                        localStorage.removeItem("@token");
                        localStorage.removeItem("@userId");
                        setToken(null);
                        setIsLoged(false);
                    }
                }
            }
        };

        fetchData();
    }, []);

    const registerUser = async (data: RegisterUserData) => {
        try {
            await registerUserService(data);
            toast.success("Usuário cadastrado com sucesso!");
            router.push("/login");
        } catch (error: any) {
            if(error.response.status === 401) 
            {
                setUser(null);
                localStorage.clear();
                localStorage.removeItem("@token");
                localStorage.removeItem("@userId");
                setToken(null);
                setIsLoged(false);
            }
                
        }
    };

    const loginUser = async (data: LoginUserData) => {
        try {
            const response = await loginUserService(data);

            localStorage.setItem("@token", response.accessToken);
            localStorage.setItem("@userId", response.user.id.toString());

            setToken(response.accessToken);
            setUser(response.user);
            toast.success("Usuário logado com sucesso!");
            setIsLoged(true);
            router.push("/");
        } catch (error: any) {
            toast.error(error.response?.data || "Erro desconhecido ao realizar login");
            setUser(null);
            localStorage.clear();
            localStorage.removeItem("@token");
            localStorage.removeItem("@userId");
            setToken(null);
            setIsLoged(false);
        }
    };

    const logoutUser = (rota?: string) => {
        try {
            localStorage.removeItem("@token");
            localStorage.removeItem("@userId");
            setToken(null);
            setUser(null);
            setIsLoged(false);
            toast.success("Usuário deslogado com sucesso!");
            router.push(rota || "/");
            router.refresh();

        } catch (error: any) {
            toast.error(error.response?.data || "Erro desconhecido ao realizar logout");
        }
    };

    return (
        <AuthContext.Provider value={{ registerUser, loginUser, user, setUser, isLoged, logoutUser, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
