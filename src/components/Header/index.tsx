import { Button, Flex, Group, Heading, Input, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={{ base: 4, md: 8, lg: 12, xl: 16 }}
      py={4}
      bg="#ededed"
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
                    color="black"
                    display={{ base: "flex", md: "flex", lg: "none" }}
                    background={"transparent"}
            >
            <IoMenu />
            </Button>
        </Menu.Trigger>
        <Portal>
            <Menu.Positioner>
                <Menu.Content display="flex" flexDirection="column" gap="1"  backgroundColor={"white"} color={"black"} >
                    <Menu.ItemGroup >
                        <Menu.ItemGroupLabel fontSize={"12px"}>COMPRE POR OBJETIVO</Menu.ItemGroupLabel>
                        <Menu.Item value="massa" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Quero ganhar massa</Link>
                        </Menu.Item>
                        <Menu.Item value="energia" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Quero mais energia</Link>
                        </Menu.Item>
                        <Menu.Item value="emagrecer" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Quero emagrecer</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel  fontSize={"12px"}>AMINOÁCIDOS</Menu.ItemGroupLabel>
                        <Menu.Item value="massa" fontSize={"12px"} color={"black"}>
                            <Link href = "/">BCAAs e Aminos</Link>
                        </Menu.Item>
                        <Menu.Item value="energia" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Creatinas</Link>
                        </Menu.Item>
                        <Menu.Item value="emagrecer" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Glutaminas</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel fontSize={"12px"}>ENERGIA E PERCA DE PESO</Menu.ItemGroupLabel>
                        <Menu.Item value="diureticos" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Diuréticos</Link>
                        </Menu.Item>
                        <Menu.Item value="l_carnitinas" fontSize={"12px"} color={"black"}>
                            <Link href = "/">L-Carnitinas</Link>
                        </Menu.Item>
                        <Menu.Item value="pre_treino" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Pré-Treinos</Link>
                        </Menu.Item>
                        <Menu.Item value="termogenicos" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Termogênicos</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel fontSize={"12px"}>MASSA MUSCULAR</Menu.ItemGroupLabel>
                        <Menu.Item value="hipercaloricos" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Hipercalóricos</Link>
                        </Menu.Item>
                        <Menu.Item borderRadius="0" value="vitaminas_diversas" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Vitaminas diversas</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel fontSize={"12px"}>PROTEÍNAS</Menu.ItemGroupLabel>
                        <Menu.Item value="albumina" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Albuminas</Link>
                        </Menu.Item>
                        <Menu.Item value="whey_concentrado" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Whey Concentrado</Link>
                        </Menu.Item>
                        <Menu.Item value="whhey_hidrolizado" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Whey Hidrolizado</Link>
                        </Menu.Item>
                        <Menu.Item value="whey_isolado" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Whey Isolado</Link>
                        </Menu.Item>
                        <Menu.Item value="whey_3w" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Whey 3W</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel fontSize={"12px"}>VITAMINAS</Menu.ItemGroupLabel>
                        <Menu.Item value="multivitaminicos" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Multivitamínicos</Link>
                        </Menu.Item>
                        <Menu.Item value="vitaminas_diversas" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Vitaminas diversas</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup>
                        <Menu.ItemGroupLabel fontSize={"12px"}>LINHA GOURMET</Menu.ItemGroupLabel>
                        <Menu.Item value="barras_de_proteina" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Barras de protína</Link>
                        </Menu.Item>
                        <Menu.Item value="pastas_de_amendoim" fontSize={"12px"} color={"black"}>
                            <Link href = "/">Pastas de amendoim</Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </Menu.Content>
            </Menu.Positioner>
        </Portal>
    </Menu.Root >
      <Heading as="h1" 
              size="lg" 
              color="red.600" 
              mr={8} 
              fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }} 
              fontWeight="bold" 
      >
        Mika <br /> Suplementos
      </Heading>

      <Flex flex="1" justify="center" mx={8}>
        <Group attached w="100%" maxW="700px">
          <Input
            flex="1"
            placeholder="Buscar produto"
            borderColor="red.500"
            _hover={{ borderColor: "red.600" }}
            _focus={{ borderColor: "red.600", boxShadow: "0 0 0 1px #e53e3e" }}
            size="md"
            height="45px"
            bg="white"
            display={{ base: "none", md: "flex" }}
          />
          <Button
            bg="red.500"
            color="white"
            _hover={{ bg: "red.600" }}
            border="1px solid"
            borderColor="red.600"
            height="45px"
            display={{ base: "none", md: "flex" }}
          >
            <PiMagnifyingGlassBold />
          </Button>
        </Group>
      </Flex>

      <Flex align="center" gap={4}>
        <Button
          variant="solid"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        >
          <Link href="/login">
            <IoMdPerson />
          </Link>
        </Button>
        <Button
          variant="solid"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        >
          <Link href="/">
            <FaShoppingCart />
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
