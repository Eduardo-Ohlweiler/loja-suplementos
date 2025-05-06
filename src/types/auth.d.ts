export interface RegisterUserData {
    nome: string;
    email: string;
    password: string;
    telefone: string;
    endereco: string;
    confirmPassword?: string;
}


export interface LoginUserData {
    email: string;
    password: string;
}

export interface AuthContextInterface {
    registerUser: (data: RegisterUserData) => void;
    loginUser: (data: LoginUserData) => void;
    logoutUser: () => void;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isLoged: boolean;
    token: string | null;
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

export interface UpdateUserData {
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    password: string;
}

