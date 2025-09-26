'use client';

import { getCategorias, getObjetivos } from "@/services/produto.service";
import { Classificacao } from "@/types/produto/classificacao";
import { Objetivo } from "@/types/produto/objetivo";
import { Button, Flex, Group, Input, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const HeaderBottons = () => {
    const [objetivos, setObjetivos]   = useState<Objetivo[]>([]);
    const [categorias, setCategorias] = useState<Classificacao[]>([]);

    const fetchCategorias = async() => {
        const categoriasData = await getCategorias();
        setCategorias(categoriasData);
    }

    const fecthObjetivos = async() => {
        const objetivosData = await getObjetivos();
        setObjetivos(objetivosData);
    }

    useEffect(() => {
        fetchCategorias();
    }, []);

    useEffect(() => {
        fecthObjetivos();
    }, []);

    return (
        <>
            <Flex as = "header" 
                    align = "center" 
                    justify = "center" 
                    bg="white" 
                    fontSize="px" 
                    display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
                    px={{ base: 4, md: 8, lg: 12, xl: 16 }}
                    boxShadow="lg">
                <Group grow justify = "space-between" gap="40px" >
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline"  
                                    w={{ base: "100px", md: "100px"}} 
                                    h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                                    border="none" 
                                    fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                                    backgroundColor="red.700"
                                    borderRadius={"none"}
                            >
                            <IoMenu />
                            Menu
                            </Button>
                        </Menu.Trigger>
                        <Portal>
                            <Menu.Positioner >
                                <Menu.Content display="flex" 
                                              flexDirection="row" 
                                              gap="15px"  
                                              backgroundColor={"white"} 
                                              color={"black"}
                                              p={"20px"}
                                              width={"250px"}
                                              justifyContent={"space-between"}
                                              flexWrap={"wrap"}
                                >
                                    <Menu.ItemGroup>
                                        <Menu.ItemGroupLabel>COMPRE POR OBJETIVO</Menu.ItemGroupLabel>
                                        {
                                            objetivos?.map((link, index) => (
                                                <Menu.Item key={index + link.objetivoNome} value={link.objetivoNome} color={"black"} fontSize={"14px"}>
                                                    <Link href = {`/objetivos/${link.id}`} >{link.objetivoNome}</Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </Menu.ItemGroup>
                                    <Menu.ItemGroup>
                                        <Menu.ItemGroupLabel>COMPRE POR CATEGORIA</Menu.ItemGroupLabel>
                                        {
                                            categorias?.map((link, index) => (
                                                <Menu.Item key={index + link.categoriaNome} value={link.categoriaNome} color={"black"} fontSize={"14px"}>
                                                    <Link href = {`/categorias/${link.id}`} >{link.categoriaNome}</Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </Menu.ItemGroup>
                                </Menu.Content>
                            </Menu.Positioner>
                        </Portal>
                    </Menu.Root >
                    <Button variant="solid" 
                            w={{ base: "75px", md: "400px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = {`/objetivos/todos`} >Compre por objetivo</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = {`/categorias/todos`} >Compre por categoria</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = {`/categorias/2`} >Proteínas</Link>
                    </Button>
                    
                </Group>
            </Flex>
            <Group attached w="100%" maxW="700px">
                <Input
                flex="1"
                placeholder="Buscar produto"
                borderColor="solid 1px"
                _hover={{ borderColor: "red.600" }}
                size="md"
                height="45px"
                bg="white"
                display={{ base: "flex", md: "none" }}
                />
                <Button
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
                border="1px solid"
                borderColor="red.600"
                height="45px"
                display={{ base: "flex", md: "none" }}
                >
                <PiMagnifyingGlassBold />
                </Button>
            </Group>
        </>
    );
};

export default HeaderBottons;