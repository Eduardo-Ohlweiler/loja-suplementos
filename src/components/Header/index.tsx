import { Button, Flex, Group, Heading, Input, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { menu_header } from "@/utils/button/menu_header";

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
                <Menu.Content display="flex" 
                              flexDirection="column" 
                              gap="1"  
                              backgroundColor={"white"} 
                              color={"black"} 
                >
                  {
                    menu_header.map((item, index) => (
                      <Menu.ItemGroup >
                        <Menu.ItemGroupLabel fontSize={"14px"}>{item.title}</Menu.ItemGroupLabel>
                        {
                          item.links.map((link, index) => (
                            <Menu.Item value={link.value} fontSize={"14px"} color={"black"}>
                                <Link href = {link.link}>{link.texto}</Link>
                            </Menu.Item>
                          ))
                        }
                      </Menu.ItemGroup>
                    ))
                  }
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
        <Link href="/">Mika <br />&nbsp;&nbsp;&nbsp;&nbsp; Suplementos</Link>
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
