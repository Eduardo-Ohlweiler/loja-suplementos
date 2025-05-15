export interface User{
    nome: string;
    email: string;
    telefone: string;
    id: number;
    endereco: string;
}

export interface RegisterUserData extends User {
    password: string;
    confirmPassword?: string;
}

export interface LoginUserData {
    email: string;
    password: string;
}

export interface AuthContextInterface {
    registerUser: (data: RegisterUserData) => void;
    loginUser: (data: LoginUserData) => void;
    logoutUser: (rota?: string) => void;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    isLoged: boolean;
    token: string | null;
}


export interface UserFormData extends RegisterUserData {
    confirmPassword: string;
}



export interface UpdateUserData extends User {
    password: string;
}

