"use client"
import { useCart } from "@/contexts/CartContext";
import {  Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const CartCards = () => {

    const { cart } = useCart();
    
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
                            src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt={item.name}
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

                        >
                            <Card.Title fontSize={"12px"} >{item.name}</Card.Title>
                            <Flex as ={"span"} flexDirection={"column"}
                                                font={"bold"}
                                                fontSize={"10px"}
                                                wordWrap={"no-wrap"}
                            >
                                <Flex gap={2}>
                                    <Text >Valor: </Text>
                                    <Text color={"red.700"}> R$ {item.price.toFixed(2).replace(".", ",")}</Text>
                                </Flex>
                                <Flex gap={2}>
                                    <Text >Quantidade: </Text>
                                    <Text color={"black"}>{item.quantity}</Text>
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
                                >
                                    <FaTrash />
                                </Button>

                            </Flex>
                        </Card.Body>
                    </Box>
                </Card.Root>
            ))}
        </>
    );
};

export default CartCards;