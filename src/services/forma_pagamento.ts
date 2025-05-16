import { FormaPagamento } from "@/types/forma_pagamento";
import api from "./api";

export async function getFormasPagamento(): Promise<FormaPagamento[]> {
  const resposta = await api.get("/forma_pagamento");

  return resposta.data;
}
