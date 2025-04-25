import { menu_header } from "@/utils/button/menu_header";
import { Button, Flex, Group, Input, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";


const HeaderBottons = () => {
    

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
                <Group grow justify = "space-between" >
                    <Menu.Root>
                        <Menu.Trigger asChild>
                            <Button variant="outline"  
                                    w={{ base: "100px", md: "250px"}} 
                                    h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                                    border="none" 
                                    fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                                    backgroundColor="red.600"
                            >
                            <IoMenu />
                            Suplementos
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
                                              width={"800px"}
                                              justifyContent={"space-between"}
                                              flexWrap={"wrap"}
                                >
                                   {
                                    menu_header.map((item, index) => (
                                        <Menu.ItemGroup >
                                        <Menu.ItemGroupLabel>{item.title}</Menu.ItemGroupLabel>
                                        {
                                            item.links?.map((link, index) => (
                                                <Menu.Item value={link.value} color={"black"} fontSize={"14px"}>
                                                    <Link href = {link.link} >{link.texto}</Link>
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
                    <Button variant="solid" 
                            w={{ base: "75px", md: "200px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = "/">Promoção</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = "/">Proteínas</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = "/">Energia</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = "/">Perda de peso</Link>
                    </Button>
                    <Button variant="solid" 
                            h={{ base: "40px", md: "50px", lg: "60px", xl: "70px"}} 
                            border="none" 
                            fontSize={{ base: "14px", md: "16px", lg: "18px", xl: "20px"}}
                    >
                        <Link href = "/">Combos</Link>
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