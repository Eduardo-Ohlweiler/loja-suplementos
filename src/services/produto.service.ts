import api from "./api";

export const getCategorias = async() => {

    const response = await api.get('/categoria');
    return response.data;
}

export const getProdutos = async() => {

    const response = await api.get('/produto');
    console.log(response.data)
    return response.data;
}

export const getObjetivos = async() => {

    const response = await api.get('/objetivo');
    return response.data;
}

export const getProdutosPorObjetivo = async(id?: string) => {
    const response = await api.get(`/produto/${id ? `?objetivoId=${id}` : ''}`);
    return response.data;
};

export const getProdutosPorCategoria = async(id?: string) => {
    const response = await api.get(`/produto/${id ? `?categoriaId=${id}` : ''}`);
    return response.data;
};