import api from "@/services/api";
import { LoginUserData, RegisterUserData } from "./auth";


export const registerUserService = async(data: RegisterUserData) => {

    const response = await api.post('/register', data);
    return response.data;
}

export const loginUserService = async(data: LoginUserData) => {

    const response = await api.post('/login', data);
    return response.data;
}
