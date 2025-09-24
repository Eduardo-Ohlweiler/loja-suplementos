import { PedidoItem } from "@/types/pedido_items";
import api from "./api";

export const postPedido = async( token: string, itens: PedidoItem[] ) => {

    const response = await api.post('/pedido', {itens});
    console.log(response.data);
    return response.data;

}