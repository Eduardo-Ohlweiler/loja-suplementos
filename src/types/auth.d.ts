export interface RegisterUserData {
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface LoginUserData {
    email: string;
    password: string;
}

export interface AuthContextInterface {
    registerUser: (data: RegisterUserData) => void;
    loginUser: (data: LoginUserData) => void;
}

export interface UserFormData extends RegisterUserData {
    confirmPassword: string;
}