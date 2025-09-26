"use client";
import { Button, Flex, Group, Heading, Input, Menu, Portal, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";
import Cart from "../Cart";
import ButtonUser from "../ButtonUser";
import { useProductContext } from "@/contexts/ProductContext";
import { useEffect, useState } from "react";
import { Objetivo } from "@/types/produto/objetivo";
import { Classificacao } from "@/types/produto/classificacao";
import { getCategorias, getObjetivos } from "@/services/produto.service";

const Header = () => {

  const {  setFilteredProducts, products } = useProductContext();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filtered = products.filter((produto) =>
      produto.produtoNome.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const [objetivos, setObjetivos] = useState<Objetivo[]>([]);
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
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 8, lg: 12, xl: 16 }}
      py={4}
      bg="#030303"
      boxShadow="md"
      h="100px"
      direction={"row"}
    >
      <Menu.Root>
        <Menu.Trigger asChild>
            <Button variant="outline"
                    h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}}
                    border="none"
                    fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    color="white"
                    display={{ base: "flex", md: "flex", lg: "none" }}
                    background={"transparent"}
            >
            <IoMenu />
            </Button>
        </Menu.Trigger>
        <Portal>
            <Menu.Positioner>
                <Menu.Content display="flex" 
                              flexDirection="column" 
                              gap="1"  
                              backgroundColor={"white"} 
                              color={"black"} 
                >
                  <Menu.ItemGroup >
                    <Menu.ItemGroupLabel fontSize={"14px"}>COMPRE POR OBJETIVO</Menu.ItemGroupLabel>
                    {
                      objetivos?.map((link, index) => (
                        <Menu.Item key={index + link.objetivoNome} value={link.objetivoNome} fontSize={"14px"} color={"black"}>
                            <Link href = {`/objetivos/${link.id}`} >{link.objetivoNome}</Link>
                        </Menu.Item>
                      ))
                    }
                  </Menu.ItemGroup>
                  <Menu.ItemGroup >
                    <Menu.ItemGroupLabel fontSize={"14px"}>COMPRE POR CATEGORIA</Menu.ItemGroupLabel>
                    {
                      categorias?.map((link, index) => (
                        <Menu.Item key={index + link.categoriaNome} value={link.categoriaNome} fontSize={"14px"} color={"black"}>
                            <Link href = {`/categorias/${link.id}`} >{link.categoriaNome}</Link>
                        </Menu.Item>
                      ))
                    }
                  </Menu.ItemGroup>
                </Menu.Content>
            </Menu.Positioner>
        </Portal>
    </Menu.Root >
      <Heading as="h1" 
              size="lg" 
              color="red.700" 
              mr={8} 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }} 
              fontWeight="bold" 
      >
        <ChakraLink as={Link} href="/" display="flex" flexDirection="row">
          <Image
            src="/images/logo_loja.jpeg"
            alt="Logo da loja"
            width={100}
            height={100}
            priority
          />
          <Text>Mika <br /> Suplementos</Text>
        </ChakraLink>
      </Heading>

      <Flex flex="1" justify="center" mx={8}>
        <Group attached w="100%" maxW="700px">
          <Input
            onChange={handleSearch}
            flex="1"
            placeholder="Buscar produto"
            borderColor="red.700"
            _hover={{ borderColor: "red.700" }}
            _focus={{ borderColor: "red.700", boxShadow: "0 0 0 1px #e53e3e" }}
            size="md"
            height="45px"
            bg="white"
            display={{ base: "none", md: "flex" }}
            color="black"
          />
          <Button
            bg="red.700"
            color="white"
            _hover={{ bg: "red.500" }}
            border="1px solid"
            borderColor="red.700"
            height="45px"
            display={{ base: "none", md: "flex" }}
          >
            <PiMagnifyingGlassBold />
          </Button>
        </Group>
      </Flex>

      <Flex align="center" gap={4}>
        <ButtonUser />
        <Cart/>
      </Flex>
    </Flex>
  );
};

export default Header;
