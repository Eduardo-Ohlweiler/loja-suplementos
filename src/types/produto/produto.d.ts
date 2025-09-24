import { Classificacao } from "./classificacao";
import { Objetivo } from "./objetivo";

export interface Produto {
    id:             number;
    produtoNome:    string;
    valor:          number;
    descricao:      string;
    foto:           string;
    categoria:      Classificacao;
    objetivo:       Objetivo;
}