"use client";

import ProdutoCard from "@/components/ProdutoCard";
import { getCategorias, getObjetivos, getProdutos } from "@/services/produto.service";
import { Classificacao } from "@/types/produto/classificacao";
import { Objetivo } from "@/types/produto/objetivo";
import { Produto } from "@/types/produto/produto";
import { Box, Center, Grid, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useProductContext } from "@/contexts/ProductContext";
import Banner from "@/components/Banner";

export default function Home() {
    const { filteredProducts, setProducts } = useProductContext();
    const [categorias, setCategorias] = useState<Classificacao[]>([]);
    const [objetivos, setObjetivos] = useState<Objetivo[]>([]);

    const fetchProdutos = async() => {
        const produtos = await getProdutos();
        setProducts(produtos);
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

    const produtosExibidos = filteredProducts.length > 0 ? filteredProducts : [];
    return (
        <Center paddingBottom={"40px"}
                flexDirection={"column"}
                gap={"40px"}
        >
            <Box 
                 zIndex={0}
                 mt={-4}
                 width={"100%"}
            >
                <Banner />
            </Box>
            <Box>
                <Heading color={"black"}>
                    Produtos
                </Heading>
                <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(4, 1fr)" }}
                      gap={2}>
                    {produtosExibidos?.map((produto: Produto, index: number) => (
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