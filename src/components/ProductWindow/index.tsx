"use client";
import { useCart } from "@/contexts/CartContext";
import { CartItem } from "@/types/cart";
import { ProductWindowProps } from "@/types/produtowindow";
import {
  Button,
  CloseButton,
  Dialog,
  Flex,
  Image,
  Portal,
  Text,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";

const ProductWindow: React.FC<ProductWindowProps> = ({produto}) => {
  const [open, setOpen] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const item:CartItem = {
      id:           produto.id,
      produtoNome:  produto.produtoNome,
      valor:        produto.valor,
      quantidade:   1,
      foto:         produto.foto,
      descricao:    produto.descricao,
      categoria:    produto.categoria,
      objetivo:     produto.objetivo,
    };
    addToCart(item);
  };
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Dialog.Trigger asChild>
        <Button
          variant="outline"
          h="30px"
          border="none"
          borderRadius="sm"
          fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px" }}
          color="white"
          backgroundColor="red.800"
          _hover={{ bg: "red.700" }}
          w={"100px"}
        >
          Saiba mais
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            bg="white"
            color="black"
            borderRadius="md"
            boxShadow="lg"
            border="none"
            h={"650px"}
            w={{ base: "400px", md: "600px", lg: "800px", xl: "1000px" }}
            overflow="hidden"
          >
            <Dialog.Body
              display="flex"
              flexDirection="column"
              gap="24px"
              px={4}
              py={4}
            >
              <Image
                src={produto.foto}
                alt={produto.produtoNome}
                objectFit="contain"
                width="100%"
                height="250px"
              />

              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="16px"
                flex="1"
                overflow="hidden"
              >
                <Text
                  fontSize={{
                    base: "16px",
                    md: "20px",
                    lg: "22px",
                  }}
                  fontWeight="bold"
                >
                  {produto.produtoNome}
                </Text>
                <Box
                  maxH="140px"
                  overflowY="auto"
                  w="100%"
                  pr="4px"
                  css={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#ccc transparent",
                  }}
                >
                    <Text
                        fontSize={{
                        base: "12px",
                        md: "16px",
                        lg: "18px",
                        xl: "20px",
                        }}
                        textAlign="left"
                    >
                        {produto.descricao}
                    </Text>
                </Box>
                <Grid templateColumns="auto 1fr" gap={2} w="100%" mt="auto" >
                    <Text fontSize="18px" fontWeight="bold">Categoria:</Text>
                    <Text fontSize="18px">{produto.categoria.categoriaNome}</Text>

                    <Text fontSize="18px" fontWeight="bold">Objetivo:</Text>
                    <Text fontSize="18px">{produto.objetivo.objetivoNome}</Text>

                    <Text fontSize="18px" fontWeight="bold">Valor:</Text>
                    <Text fontSize="18px">R$ {produto.valor}</Text>
                </Grid>


              </Flex>
            </Dialog.Body>

            <Dialog.Footer
              display="flex"
              justifyContent="center"
              gap="40px"
              flexWrap="wrap"
              pb={4}
            >
              <Dialog.ActionTrigger asChild>
                <Button
                  variant="outline"
                  h="50px"
                  w="120px"
                  border="none"
                  fontSize={{
                    base: "14px",
                    md: "16px",
                    lg: "18px",
                    xl: "20px",
                  }}
                  color="black"
                  backgroundColor="white"
                  _hover={{ bg: "blue.700", color: "white" }}
                >
                  Fechar
                </Button>
              </Dialog.ActionTrigger>
              <Button
                variant="solid"
                h="50px"
                w={{ base: "180px", md: "220px", lg: "260px" }}
                border="none"
                fontSize={{
                  base: "14px",
                  md: "16px",
                  lg: "18px",
                  xl: "20px",
                }}
                color="white"
                backgroundColor="red.700"
                _hover={{ bg: "red.600" }}
                onClick={handleAddToCart}
              >
                Adicionar ao carrinho
              </Button>
            </Dialog.Footer>

            <Dialog.CloseTrigger asChild>
              <CloseButton position="absolute" top="8px" right="8px" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ProductWindow;
