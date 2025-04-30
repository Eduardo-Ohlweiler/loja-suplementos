import api from "./api";

export const getCategorias = async() => {

    const response = await api.get('/categoria');
    return response.data;
}

export const getProdutos = async() => {

    const response = await api.get('/produto');
    return response.data;
}

export const getObjetivos = async() => {

    const response = await api.get('/objetivo');
    return response.data;
}