"use client";

import api from "@/services/api";
import { getUser, loginUserService, registerUserService } from "@/services/auth.service";
import { AuthContextInterface, LoginUserData, RegisterUserData, User } from "@/types/auth";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [ user, setUser ] = useState< User | null >(null);
    const [ isLoged, setIsLoged ] = useState< boolean >(false);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("@token");
        const userId = localStorage.getItem("@userId");

        if(token){
            setIsLoged(true);
        }

        const fetchData = async () => {
            if(token){
                api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
            }

            if(userId){
                const response = await getUser(Number(JSON.parse(userId)));
                setUser(response);
            }
        };
        fetchData();
    }, []);

    const registerUser = async (data: RegisterUserData) => 
    {
        try
        {
            await registerUserService(data);
            toast.success("Usuário cadastrado com sucesso!");
            router.push("/login");
        }
        catch(error: any)
        {
            toast.error(error.response.data);
        } 
    };

    const loginUser = async (data: LoginUserData) =>
    {
        try
        {
            const response = await loginUserService(data);

            localStorage.setItem("@token", JSON.stringify(response.accessToken));
            localStorage.setItem("@userId", JSON.stringify(response.user.id));

            setUser(response.user);
            toast.success("Usuário logado com sucesso!");
            setIsLoged(true);
            router.push("/");
        }
        catch(error: any)
        {
            toast.error(error.response.data);
        }
    };

    return (
        <AuthContext.Provider value={{ registerUser, loginUser, user, isLoged }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;