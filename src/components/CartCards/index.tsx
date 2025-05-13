"use client"
import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import {  Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import ProductWindow from "../ProductWindow";
import { Produto } from "@/types/produto/produto";
import { CartCardsProps } from "@/types/cart";

const CartCards:React.FC<CartCardsProps> = ({ categorias, objetivos }) => {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<Produto| null>(null);

    const handleShowProductWindow = (produto: Produto) => {
        setSelectedProduct(produto);
    };

    const getCategoriaNome = (categoriaId: number) => {
        const categoria = categorias.find(cat => cat.id === categoriaId);
        return categoria ? categoria.nome : "Categoria desconhecida";
    };
    
    const getObjetivoNome = (objetivoId: number) => {
        const objetivo = objetivos.find(obj => obj.id === objetivoId);
        return objetivo ? objetivo.nome : "Objetivo desconhecido";
    };
    

    return (
        <>
            {cart.map((item) =>(
                <Card.Root  key={item.id}
                        flexDirection="row" 
                        overflow="hidden" 
                        maxW="275px"
                        h={"125px"} 
                        minH={"100px"}
                >
                    <Flex flexDirection={"column"}>
                        <Image
                            objectFit="cover"
                            w="100px"
                            h="100px"
                            minH={"90px"}
                            src={item.foto}
                            alt={item.produto_nome}
                        />
                        <Button
                            fontSize={"10px"}
                            color={"red.700"}
                            h={"30px"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            backgroundColor={"white"}
                            fontWeight={"bold"}
                            display={"flex"}
                            gap={2}
                            onClick={() => handleShowProductWindow(item)}
                        >
                            Saiba mais
                        </Button>
                    </Flex>
                    
                    <Box backgroundColor={"white"}
                        color={"black"}
                        boxShadow={"xl"}
                        w={"100%"}
                        h={"100%"}
                    >
                        <Card.Body 
                                pl={"25px"}
                                pt={"1px"}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"start"}
                                justifyContent={"space-between"}
                                gap={2}

                        >
                            <Flex as ={"span"} flexDirection={"column"}
                                                font={"bold"}
                                                fontSize={"10px"}
                                                wordWrap={"no-wrap"}
                                                gap={1}
                                                paddingTop={"8px"}
                            >
                                <Flex h={"30px"} fontSize={"12px"} alignContent={"center"} alignItems={"center"}>
                                    <Text >{item.produto_nome}</Text>
                                </Flex>
                                
                                <Flex gap={2}>
                                    <Text >Valor: </Text>
                                    <Text color={"red.700"}> R$ {item.valor.toFixed(2).replace(".", ",")}</Text>
                                </Flex>
                                <Flex gap={2}>
                                    <Text >Quantidade: </Text>
                                    <Text color={"black"}>{item.quantidade}</Text>
                                </Flex>
                            </Flex>
                            <Flex gap={6}>
                                <Button border={"none"}
                                        w={"15px"}
                                        h={"20px"}
                                        minW={"15px"}
                                        backgroundColor={"#d8d8d8"}
                                        _hover={{ bg: "#999999", color: "white" }}
                                        font={"bold"}
                                        onClick={() => decrementQuantity(item.id)}
                                >
                                    -
                                </Button>
                                <Button border={"none"}
                                        backgroundColor={"red.700"}
                                        minW={"15px"}
                                        w={"15px"}
                                        h={"20px"}
                                        color={"white"}
                                        _hover={{ bg: "red.600", color: "white" }}
                                        font={"bold"}
                                        onClick={() => incrementQuantity(item.id)}
                                >
                                    +
                                </Button>
                                <Button border={"none"}
                                        backgroundColor={"white"}
                                        minW={"15px"}
                                        w={"15px"}
                                        h={"20px"}
                                        color={"red.600"}
                                        _hover={{ color: "red.700" }}
                                        font={"bold"}
                                        onClick={() => removeFromCart(item.id)}
                                >
                                    <FaTrash />
                                </Button>

                            </Flex>
                        </Card.Body>
                    </Box>
                </Card.Root>
            ))}
            {selectedProduct && (
                <ProductWindow
                    produto={selectedProduct}
                    categoriaNome={getCategoriaNome(selectedProduct.categoria_id)}
                    objetivoNome={getObjetivoNome(selectedProduct.objetivo_id)}
                />
            )}
        </>
    );
};

export default CartCards;