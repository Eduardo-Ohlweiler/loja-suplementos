"use client";

import ProdutoCard from "@/components/ProdutoCard";
import { getCategorias, getObjetivos, getProdutos } from "@/services/produto.service";
import { Classificacao } from "@/types/produto/classificacao";
import { Objetivo } from "@/types/produto/objetivo";
import { Produto } from "@/types/produto/produto";
import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState<Classificacao[]>([]);
    const [objetivos, setObjetivos] = useState<Objetivo[]>([]);

    const fetchProdutos = async() => {
        const produtos = await getProdutos();
        setProdutos(produtos);
    }

    const fetchCategorias = async() => {
        const categorias = await getCategorias();
        setCategorias(categorias);
    }

    const fetchObjetivos = async() => {
        const objetivos = await getObjetivos();
        setObjetivos(objetivos);
    }

    useEffect(() => {
        fetchProdutos();
        fetchCategorias();
        fetchObjetivos();
    }, []);

    return (
        <Center paddingBottom={"40px"}>
            <Box>
                <Heading>
                    Produtos
                </Heading>
                <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
                      gap={2}>
                    {produtos?.map((produto, index) => (
                        <ProdutoCard
                            key={produto.id+index}{...produto}
                            produto={produto}
                            categorias={categorias}
                            objetivos={objetivos}
                        />
                    ))}
                </Grid>
            </Box>
        </Center>

    )
}