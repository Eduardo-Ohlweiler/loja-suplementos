"use client";

import ProdutoCard from "@/components/ProdutoCard";
import { getCategorias, getProdutosPorCategoria } from "@/services/produto.service";
import { Classificacao } from "@/types/produto/classificacao";
import { Produto } from "@/types/produto/produto";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Objetivos() {
    const [categorias, setCategorias] = useState<Classificacao[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const params = useParams();
    const router = useRouter();

    const fecthCategorias = async() => {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
    }

    const categoriaSelecionada = params?.categoriaId;

    const fetchProdutos = async(id:string) => {
        const numberId = Number(id);
        if(isNaN(numberId)){
            const resp = await getProdutosPorCategoria();
            setProdutos(resp);
            return;
        }
        const produtosFiltrados = await getProdutosPorCategoria(id);
        setProdutos(produtosFiltrados);
    }

    useEffect(() => {
        fetchProdutos(categoriaSelecionada as string);
    }, [categoriaSelecionada]);

    useEffect(() => {
        fecthCategorias();
    }, []);

    return (
        <Flex
            direction={{ base: "column", md: "row" }}
            px={4}
            py={6}
            gap={6}
        >
            <Box
                minW={{ base: "100%", md: "160px" }}
                maxW={{ base: "100%", md: "180px" }}
                borderRight={{ base: "none", md: "1px solid #e2e8f0" }}
                pr={{ base: 0, md: 3 }}
                mb={{ base: 6, md: 0 }}
            >
                <Button
                    variant="outline"
                    colorScheme="red"
                    mb={2}
                    color="black"
                    _hover={{ bg: "red.100", color: "black" }}
                    size="sm"
                    width="100%"
                    onClick={() => router.push("/categorias/todos")}
                >
                    Ver Todos
                </Button>
                {categorias.map((categoria) => (
                    <Button
                        key={categoria.id}
                        onClick={() => router.push(`/categorias/${categoria.id}`)}
                        variant={categoria.id === Number(categoriaSelecionada) ? "solid" : "ghost"}
                        colorScheme="red"
                        color="black"
                        _hover={{ bg: "red.100", color: "black" }}
                        mb={2}
                        size="sm"
                        width="100%"
                        justifyContent="flex-start"
                        whiteSpace="normal"
                        textAlign="left"
                    >
                        {categoria.categoria_nome}
                    </Button>
                ))}
            </Box>

            <Grid
                templateColumns={{
                    base: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                }}
                gap={6}
                flex={1}
            >
                {produtos?.map((produto, index) => (
                    <ProdutoCard
                        key={produto.id + index}
                        {...produto}
                        produto={produto}
                        categorias={categorias}
                    />
                ))}
            </Grid>
        </Flex>

    );
}