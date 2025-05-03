"use client"
import {  Box, Button, Card, Flex, Image, Text } from "@chakra-ui/react";

const CartCards = () => {
    return (
        <Card.Root flexDirection="row" 
                   overflow="hidden" 
                   maxW="275px"
                   maxH={"100px"} minH={"100px"}
        >
            <Flex flexDirection={"column"}>
                <Image
                    objectFit="cover"
                    maxW="70px"
                    maxH="70px"
                    minH={"70px"}
                    src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="Caffe Latte"
                />
                <Text
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
                </Text>
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
                    <Card.Title fontSize={"sm"} >Nome produto</Card.Title>
                    <Flex as ={"span"} flexDirection={"column"}
                                        font={"bold"}
                                        fontSize={"10px"}
                                        wordWrap={"no-wrap"}
                    >
                        <Flex gap={2}>
                            <Text >Valor: </Text>
                            <Text color={"red.700"}> R$ 00,00</Text>
                        </Flex>
                        <Flex gap={2}>
                            <Text >Quantidade: </Text>
                            <Text color={"black"}> 0</Text>
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
                    </Flex>
                </Card.Body>
            </Box>
        </Card.Root>
    )
}

export default CartCards;