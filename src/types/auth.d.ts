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
    user: User | null;
    isLoged: boolean;
}

export interface UserFormData extends RegisterUserData {
    confirmPassword: string;
}

export interface User{
    name: string;
    email: Email;
    telefone: Telefone;
    id: number;
    endereco: Endereco;
}

export interface Telefone{
    tipo: string;
    numero: string;
    principal: number;
    id: number;
}

export interface Email{
    principal: number;
    id: number;
    email: string;
}
export interface Endereco{
    cep: string;
    rua: string;
    numero: string;
    bairro: string;
    cidade: Cidade;
}

export interface Cidade {
    id: number;
    nome: string;
    estado: Estado;
}

export interface Estado {
    id: number;
    sigla: string;
    nome: string;
}