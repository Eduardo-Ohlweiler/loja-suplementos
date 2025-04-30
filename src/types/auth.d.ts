export interface RegisterUserData {
    nome: string;
    email: string;
    password: string;
    telefone: string;
    endereco: string;
}

export interface LoginUserData {
    email: string;
    password: string;
}

export interface AuthContextInterface {
    registerUser: (data: RegisterUserData) => void;
    loginUser: (data: LoginUserData) => void;
    user: User | null;
    isLoged: boolean;
}

export interface UserFormData extends RegisterUserData {
    confirmPassword: string;
}

export interface User{
    nome: string;
    email: string;
    telefone: string;
    id: number;
    endereco: string;
}
