import * as yup from "yup";
export const resgisterProdutoSchema = yup.object().shape({

    nome: yup.string().required("Nome obrigatório"),
    preco: yup.string().required("Preco obrigatório"),
    imagem: yup.string().required("Imagem obrigatória"),
    categoria: yup.string().required("Categoria obrigatória"),
    objetivo: yup.string().required("Objetivo obrigatório"),
})