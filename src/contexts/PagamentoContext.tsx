"use client";

import { createContext, useContext, useState } from "react";

type FormaPagamento = {
  id: number;
  forma_pagamento_nome: string;
  quantidade_parcelas: number;
};

type PagamentoContextType = {
  formaSelecionada: FormaPagamento | null;
  setFormaSelecionada: (forma: FormaPagamento) => void;
  formasDisponiveis: FormaPagamento[];
  setFormasDisponiveis: (formas: FormaPagamento[]) => void;
};

const PagamentoContext = createContext<PagamentoContextType>({} as PagamentoContextType);

export const PagamentoProvider = ({ children }: { children: React.ReactNode }) => {
  const [formaSelecionada, setFormaSelecionada] = useState<FormaPagamento | null>(null);
  const [formasDisponiveis, setFormasDisponiveis] = useState<FormaPagamento[]>([]);

  return (
    <PagamentoContext.Provider value={{ formaSelecionada, setFormaSelecionada, formasDisponiveis, setFormasDisponiveis }}>
      {children}
    </PagamentoContext.Provider>
  );
};

export const usePagamento = () => useContext(PagamentoContext);
