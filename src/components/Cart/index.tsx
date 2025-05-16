"use client"

import {
  Badge,
    Button,
    CloseButton,
    Drawer,
    Flex,
    HStack,
    Portal,
    Text
  } from "@chakra-ui/react";
  import { FaShoppingCart } from "react-icons/fa";
import CartCards from "../CartCards";
import { useCart } from "@/contexts/CartContext";
import { Classificacao } from "@/types/produto/classificacao";
import { Objetivo } from "@/types/produto/objetivo";
import { useEffect, useState } from "react";
import { getCategorias, getObjetivos } from "@/services/produto.service";
import { useRouter } from "next/navigation";
  
  const Cart = () => {
      const [categorias, setCategorias] = useState<Classificacao[]>([]);
      const [objetivos, setObjetivos]   = useState<Objetivo[]>([]);
      const router = useRouter();
      const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.valor * item.quantidade, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantidade, 0);

  const handleFinalizar = () => {
      const query = new URLSearchParams({
        total: total.toFixed(2),
        cart: JSON.stringify(cart),
      }).toString();
      router.push(`/finalizar?${query}`);
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
              fetchCategorias();
              fetchObjetivos();
          }, []);
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
              {totalItems > 0 && (
              <Badge
                colorScheme="red"
                position="absolute"
                top="-1"
                right="-1"
                borderRadius="full"
                fontSize="sm"
                color="black"
                backgroundColor={"#d8d8d8"}
                p={1}
              >
                {totalItems}
              </Badge>
            )}
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
                  <CartCards categorias={categorias} objetivos={objetivos} />
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
                    <Button 
                            backgroundColor={"red.700"}
                            color={"white"}
                            w={"150px"}
                            _hover={{ bg: "red.600" }}
                            alignItems={"center"}
                            justifyContent={"center"}
                            display={"flex"}
                            border={"none"}
                            borderRadius={"6px"}
                            onClick={handleFinalizar}
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
  