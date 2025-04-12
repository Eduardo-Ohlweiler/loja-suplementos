"use client";

import { Button, Center, Field, Fieldset, Input, Link, Separator, Stack, Text, Box } from "@chakra-ui/react";

export default function Register() {
    return (
        <Center height="100vh" bg="gray.50">
            <Box
                w={{ base: "80%", sm: "70%", md: "50%", lg: "40%" }}
                p={6}
                bg="white"
                borderRadius="md"
                boxShadow="lg"
                border="1px"
                borderColor="gray.200"
            >
                <Fieldset.Root>
                    <Stack>
                        <Fieldset.Legend fontSize="2xl" fontWeight="bold" textAlign="center" color="teal.500">
                            Bem-vindo!
                        </Fieldset.Legend>
                        <Fieldset.Legend fontSize="lg" textAlign="center" color="gray.600">
                            Será um prazer ter você com a gente!
                        </Fieldset.Legend>
                    </Stack>

                    <Fieldset.Content paddingBottom="6" mt={6}>
                        <Field.Root>
                            <Field.Label htmlFor="name" fontWeight="semibold" color="gray.700">Nome:</Field.Label>
                            <Input id="name" type="text" name="name" placeholder="Digite seu nome" />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label htmlFor="email" fontWeight="semibold" color="gray.700">E-mail:</Field.Label>
                            <Input id="email" type="email" name="email" placeholder="Digite seu e-mail" />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label htmlFor="phone" fontWeight="semibold" color="gray.700">Telefone:</Field.Label>
                            <Input id="phone" type="text" name="phone" placeholder="Digite seu telefone" />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label htmlFor="password" fontWeight="semibold" color="gray.700">Senha:</Field.Label>
                            <Input id="password" type="password" name="password" placeholder="Digite sua senha" />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label htmlFor="confirmPassword" fontWeight="semibold" color="gray.700">Confirme sua senha:</Field.Label>
                            <Input id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirme sua senha" />
                        </Field.Root>
                    </Fieldset.Content >

                    <Button
                        type="submit"
                        colorScheme="teal" bg="teal.600"
                        _hover={{ bg: "teal.500" }}
                    >
                        Cadastrar
                    </Button>

                    <Separator my={6} />

                    <Text textAlign="center" color="gray.700">
                        Já possui uma conta?{" "}
                        <Link href="/login" color="teal.500" fontWeight="bold">
                            Faça login
                        </Link>
                    </Text>
                </Fieldset.Root>
            </Box>
        </Center>
    );
}
