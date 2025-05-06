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
                } catch (error) {
                    console.error("Erro ao carregar o usuário:", error);
                    toast.error("Erro ao carregar o usuário");
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
            toast.error(error.response?.data || "Erro desconhecido ao cadastrar usuário");
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
        }
    };

    const logoutUser = () => {
        try {
            localStorage.removeItem("@token");
            localStorage.removeItem("@userId");
            setToken(null);
            setUser(null);
            setIsLoged(false);
            toast.success("Usuário deslogado com sucesso!");
            router.push("/login");
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
