import { Button, Flex, Group, Menu, Portal } from "@chakra-ui/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";


const HeaderBottons = () => {
    return (
        <Flex as = "header" align = "center" justify = "center" >
            <Group grow justify = "space-between">
                <Menu.Root>
                    <Menu.Trigger asChild>
                        <Button variant="outline"  w="400px" backgroundColor="red.600">
                        <IoMenu />
                        Suplementos
                        </Button>
                    </Menu.Trigger>
                    <Portal>
                        <Menu.Positioner>
                            <Menu.Content display="flex" flexDirection="row" gap="10" paddingLeft="20px">
                                <Menu.ItemGroup >
                                    <Menu.ItemGroupLabel>COMPRE POR OBJETIVO</Menu.ItemGroupLabel>
                                    <Menu.Item value="massa">
                                        <Link href = "/">Quero ganhar massa</Link>
                                    </Menu.Item>
                                    <Menu.Item value="energia">
                                        <Link href = "/">Quero mais energia</Link>
                                    </Menu.Item>
                                    <Menu.Item value="emagrecer">
                                        <Link href = "/">Quero emagrecer</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>AMINOÁCIDOS</Menu.ItemGroupLabel>
                                    <Menu.Item value="massa">
                                        <Link href = "/">BCAAs e Aminos</Link>
                                    </Menu.Item>
                                    <Menu.Item value="energia">
                                        <Link href = "/">Creatinas</Link>
                                    </Menu.Item>
                                    <Menu.Item value="emagrecer">
                                        <Link href = "/">Glutaminas</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>ENERGIA E PERCA DE PESO</Menu.ItemGroupLabel>
                                    <Menu.Item value="diureticos">
                                        <Link href = "/">Diuréticos</Link>
                                    </Menu.Item>
                                    <Menu.Item value="l_carnitinas">
                                        <Link href = "/">L-Carnitinas</Link>
                                    </Menu.Item>
                                    <Menu.Item value="pre_treino">
                                        <Link href = "/">Pré-Treinos</Link>
                                    </Menu.Item>
                                    <Menu.Item value="termogenicos">
                                        <Link href = "/">Termogênicos</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>MASSA MUSCULAR</Menu.ItemGroupLabel>
                                    <Menu.Item value="hipercaloricos">
                                        <Link href = "/">Hipercalóricos</Link>
                                    </Menu.Item>
                                    <Menu.Item borderRadius="0" value="vitaminas_diversas">
                                        <Link href = "/">Vitaminas diversas</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.Content>

                            <Menu.Content  display="flex" flexDirection="row" gap="12">
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>PROTEÍNAS</Menu.ItemGroupLabel>
                                    <Menu.Item value="albumina">
                                        <Link href = "/">Albuminas</Link>
                                    </Menu.Item>
                                    <Menu.Item value="whey_concentrado">
                                        <Link href = "/">Whey Concentrado</Link>
                                    </Menu.Item>
                                    <Menu.Item value="whhey_hidrolizado">
                                        <Link href = "/">Whey Hidrolizado</Link>
                                    </Menu.Item>
                                    <Menu.Item value="whey_isolado">
                                        <Link href = "/">Whey Isolado</Link>
                                    </Menu.Item>
                                    <Menu.Item value="whey_3w">
                                        <Link href = "/">Whey 3W</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>VITAMINAS</Menu.ItemGroupLabel>
                                    <Menu.Item value="multivitaminicos">
                                        <Link href = "/">Multivitamínicos</Link>
                                    </Menu.Item>
                                    <Menu.Item value="vitaminas_diversas">
                                        <Link href = "/">Vitaminas diversas</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup>
                                    <Menu.ItemGroupLabel>LINHA GOURMET</Menu.ItemGroupLabel>
                                    <Menu.Item value="barras_de_proteina">
                                        <Link href = "/">Barras de protína</Link>
                                    </Menu.Item>
                                    <Menu.Item value="pastas_de_amendoim">
                                        <Link href = "/">Pastas de amendoim</Link>
                                    </Menu.Item>
                                </Menu.ItemGroup>
                            </Menu.Content>
                        </Menu.Positioner>
                    </Portal>
                </Menu.Root>
                <Button variant="solid"><Link href = "/">Promoção</Link></Button>
                <Button variant="solid"><Link href = "/">Proteínas</Link></Button>
                <Button variant="solid"><Link href = "/">Energia</Link></Button>
                <Button variant="solid"><Link href = "/">Perda de peso</Link></Button>
                <Button variant="solid"><Link href = "/">Objetivos</Link></Button>
            </Group>
        </Flex>
    );
};

export default HeaderBottons;