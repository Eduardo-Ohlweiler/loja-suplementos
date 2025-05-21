"use client";

import ProdutoCard from "@/components/ProdutoCard";
import {  getObjetivos, getProdutosPorObjetivo } from "@/services/produto.service";
import { Objetivo } from "@/types/produto/objetivo";
import { Produto } from "@/types/produto/produto";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Objetivos() {
    const [objetivos, setObjetivos] = useState<Objetivo[]>([]);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const params = useParams();
    const router = useRouter();

    const fecthObjetivos = async() => {
        const objetivosData = await getObjetivos();
        setObjetivos(objetivosData);
    }

    const objetivoSelecionado = params?.objetivoId;

    const fetchProdutos = async(id:string) => {
        const numberId = Number(id);
        if(isNaN(numberId)){
            const resp = await getProdutosPorObjetivo();
            setProdutos(resp);
            return;
        }
        const produtosFiltrados = await getProdutosPorObjetivo(id);
        setProdutos(produtosFiltrados);
    }

    useEffect(() => {
        fetchProdutos(objetivoSelecionado as string);
    }, [objetivoSelecionado]);

    useEffect(() => {
        fecthObjetivos();
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
                    onClick={() => router.push("/objetivos/todos")}
                >
                    Ver Todos
                </Button>
                {objetivos.map((objetivo) => (
                    <Button
                        key={objetivo.id}
                        onClick={() => router.push(`/objetivos/${objetivo.id}`)}
                        variant={objetivo.id === Number(objetivoSelecionado) ? "solid" : "ghost"}
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
                        {objetivo.objetivo_nome}
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
                        objetivos={objetivos}
                    />
                ))}
            </Grid>
        </Flex>

    );
}