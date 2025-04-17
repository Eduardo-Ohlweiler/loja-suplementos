"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Provider } from "@/components/ui/provider";
import { useAuth } from "@/contexts/AuthContext";
import { registerSchema } from "@/schemas/auth.schemas";
import { UserFormData } from "@/types/auth";
import { Button, Center, Field, Fieldset, Input, Separator, Stack, Text, Box, Highlight } from "@chakra-ui/react";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Register() {

    const { registerUser } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onFormSubmit = ({ name, email, password, phone }: UserFormData) => {registerUser({ name, email, password,phone })};



    return (
        <Provider>
            <Center as ="form" onSubmit={handleSubmit(onFormSubmit)} height="100vh" bg="gray.50" >
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
                                <Input {...register("name")} placeholder="Digite seu nome" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.name?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="email" fontWeight="semibold" color="gray.700">E-mail:</Field.Label>
                                <Input {...register("email")} placeholder="Digite seu e-mail" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.email?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="phone" fontWeight="semibold" color="gray.700">Telefone:</Field.Label>
                                <Input {...register("phone")} placeholder="Digite seu telefone" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.phone?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="password" fontWeight="semibold" color="gray.700">Senha:</Field.Label>
                                <PasswordInput {...register("password")} placeholder="Digite sua senha" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.password?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="confirmPassword" fontWeight="semibold" color="gray.700">Confirme sua senha:</Field.Label>
                                <PasswordInput {...register("confirmPassword")} placeholder="Confirme sua senha" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.confirmPassword?.message}</Text>
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

                            <Link href="/login" color="teal.500" >
                                <Highlight
                                query="Faça login"
                                styles={{
                                    color: "#00b3b9",
                                    fontWeight: "medium",
                                    cursor: "pointer",
                                }}
                                >
                                Faça login
                                </Highlight>
                            </Link>
                        </Text>
                    </Fieldset.Root>
                </Box>
            </Center>
        </Provider>
    );
}
