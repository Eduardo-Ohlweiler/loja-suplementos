"use client";

import {
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
  Flex,
  Box,
  Link as ChakraLink
} from "@chakra-ui/react";

const Finalizar = () => {
    return (
        <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg="gray.100"
        px={4}
        textAlign={"center"}
        >
        <Fieldset.Root
            size="lg"
            w="100%"
            maxW="500px"
            backgroundColor="white"
            color="black"
            p={6}
            borderRadius="md"
            boxShadow="lg"
        >
            <Stack gap={6}>
            <Box textAlign="center">
                <Fieldset.Legend fontSize="xl" fontWeight="bold" color="black">
                Finalizar compra
                </Fieldset.Legend>
                <Fieldset.HelperText fontSize="sm" color="gray.600">
                Escolha a forma de pagamento.
                </Fieldset.HelperText>
            </Box>

            <Fieldset.Content>
                <Stack gap={4} >
                <Field.Root>
                    <Field.Label>Forma de pagamento:</Field.Label>
                    <NativeSelect.Root w="200px">
                    <NativeSelect.Field
                        name="forma_pagamento"
                        backgroundColor="white"
                    >
                        <For
                        each={[
                            "Dinheiro",
                            "Cartão de crédito",
                            "Cartão de débito",
                            "Pix",
                            "Boleto",
                        ]}
                        >
                        {(item) => (
                            <option key={item} value={item} style={{ color: "black", backgroundColor: "white" }} >
                            {item}
                            </option>
                        )}
                        </For>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Field.Root>
                    <Field.Label>Quantidade de parcelas:</Field.Label>
                    <NativeSelect.Root w="100px">
                    <NativeSelect.Field
                        name="quantidade_parcelas"
                        backgroundColor="white"
                    >
                        <For each={Array.from({ length: 10 }, (_, i) => `${i + 1}`)} >
                        {(item) => (
                            <option key={item} value={item} style={{ color: "black", backgroundColor: "white" }} >
                            {item}
                            </option>
                        )}
                        </For>
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Flex direction={"column"} gap={4}>
                    <Field.Root flex="1">
                    <Field.Label>Valor da parcela:</Field.Label>
                    <Input name="valor_parcela" backgroundColor="#d2d2d2" w={"150px"} readOnly />
                    </Field.Root>

                    <Field.Root flex="1">
                    <Field.Label>Valor total:</Field.Label>
                    <Input name="valor_total" backgroundColor="#d2d2d2" w={"150px"} readOnly />
                    </Field.Root>
                </Flex>
                </Stack>
            </Fieldset.Content>

            <Button
                type="submit"
                colorScheme="red"
                size="md"
                w="100%"
                backgroundColor="red.800"
                color="white"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                bg: "red.600",
                }}
            >
                Finalizar pedido
            </Button>
            <ChakraLink href="/"
                type="submit"
                colorScheme="blue"
                h={"40px"}
                alignContent={"center"}
                justifyContent={"center"}
                borderRadius={"md"}
                w="100%"
                backgroundColor="blue.800"
                color="white"
                fontSize="md"
                fontWeight="bold"
                _hover={{
                bg: "blue.600",
                }}
            >
                Voltar
            </ChakraLink>
            </Stack>
        </Fieldset.Root>
        </Flex>
    );
};

export default Finalizar;
