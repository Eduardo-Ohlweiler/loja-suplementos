"use client"

import {
    Button,
    CloseButton,
    Drawer,
    Flex,
    HStack,
    Portal,
    Text,
  } from "@chakra-ui/react";
  import { FaShoppingCart } from "react-icons/fa";
import CartCards from "../CartCards";
import { useCart } from "@/contexts/CartContext";
  
  const Cart = () => {

    const { cart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <HStack wrap="wrap">
        <Drawer.Root >
          <Drawer.Trigger asChild>
            <Button size="sm"
                    variant="solid"
                    bg="red.700"
                    color="white"
                    _hover= {{ bg: "red.600" }}
                    
            >
              <FaShoppingCart />
            </Button>
          </Drawer.Trigger>
          <Portal >
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content>
                <Drawer.Header backgroundColor={"red.700"}
                               boxShadow={"xl"}
                               >
                  <Drawer.Title>Produtos selecionados</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body backgroundColor={"white"}
                             color={"black"}
                             boxShadow={"xl"}
                             
                >
                  
                  <CartCards/>
                </Drawer.Body>
                <Drawer.Footer backgroundColor={"white"}
                               boxShadow="0px 40px 120px rgba(0, 0, 0, 0.9)"
                               flexDirection={"column"}
                >
                <Flex color={"black"}
                      fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}>
                    <Text>Total:</Text>
                    <Text fontWeight="bold">R$ {total.toFixed(2).replace('.', ',')}</Text>
                </Flex>
                <Flex gap={6}>
                    <Drawer.ActionTrigger asChild>
                        <Button variant="outline"
                                color={"black"}
                                backgroundColor={"#d8d8d8"}
                                _hover={{ bg: "#999999", color: "white" }}
                                border={"none"}
                        >
                            Cancelar
                        </Button>
                    </Drawer.ActionTrigger>
                    <Button backgroundColor={"red.700"}
                            color={"white"}
                            w={"150px"}
                            _hover={{ bg: "red.600" }}
                    >
                        Finalizar
                    </Button>
                </Flex>
                    
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </HStack>
    );
  };
  
  export default Cart;
  