"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Provider } from "@/components/ui/provider";
import { useAuth } from "@/contexts/AuthContext";
import { registerSchema } from "@/schemas/auth.schemas";
import api from "@/services/api";
import { UpdateUserData, UserFormData } from "@/types/auth";
import { Button, Center, Field, Fieldset, Input, Separator, Stack, Text, Box, Highlight, Flex, Link as ChakraLink} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export default function Register() {
    const { user, setUser, registerUser, logoutUser, isLoged } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            nome: "",
            email: "",
            password: "",
            telefone: "",
            endereco: "",
            confirmPassword: ""
        }
    });
    
    useEffect(() => {
        if (user && isLoged) {
            reset({
                nome: user.nome || "",
                email: user.email || "",
                password: "",
                telefone: user.telefone || "",
                endereco: user.endereco || "",
                confirmPassword: ""
            });
        }
    }, [user, isLoged, reset]);
    

    const onFormSubmit = ({ nome, email, password, telefone, endereco }: UserFormData) => {
        if (isLoged && user) {
            const updatedUserData: UpdateUserData = { nome, email, password, telefone, endereco };
            updateUserProfile(updatedUserData);
        } else {
            registerUser({ nome, email, password, telefone, endereco });
        }
    };
    
    
    const updateUserProfile = async (updatedUserData: UpdateUserData) => {
        if (!user) return; 
    
        try {
            const response = await api.put(`/users/${user.id}`, updatedUserData); 
            toast.success("Perfil atualizado com sucesso!");
            setUser(response.data.user); 
        } catch (error) {
            console.error("Erro ao atualizar o perfil:", error);
            toast.error("Erro ao atualizar o perfil!");
        }
    };

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
                            <Fieldset.Legend fontSize="2xl" fontWeight="bold" textAlign="center" color="red.700">
                                Bem-vindo!
                            </Fieldset.Legend>
                            {!user && isLoged === false ? (
                                <Fieldset.Legend fontSize="lg" textAlign="center" color="gray.600">
                                    Será um prazer ter você com a gente!
                                </Fieldset.Legend>
                            ) : (
                                <Fieldset.Legend fontSize="lg" textAlign="center" color="gray.600">
                                    Editar perfil
                                </Fieldset.Legend>
                            )}
                        </Stack>

                        <Fieldset.Content paddingBottom="6" mt={6}>
                            <Field.Root>
                                <Field.Label htmlFor="nome" fontWeight="semibold" color="gray.700">Nome:</Field.Label>
                                <Input {...register("nome")} placeholder="Digite seu nome" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.nome?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="email" fontWeight="semibold" color="gray.700">E-mail:</Field.Label>
                                <Input {...register("email")} placeholder="Digite seu e-mail" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.email?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="telefone" fontWeight="semibold" color="gray.700">Telefone:</Field.Label>
                                <Input {...register("telefone")} placeholder="Digite seu telefone" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.telefone?.message}</Text>
                            </Field.Root>
                            <Field.Root>
                                <Field.Label htmlFor="endereco" fontWeight="semibold" color="gray.700">Endereço:</Field.Label>
                                <Input {...register("endereco")} placeholder="Digite seu endereço" color="gray.600" />
                                <Text color="red.500" fontSize="14px">{errors.endereco?.message}</Text>
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

                        {!user && isLoged === false ? (
                                <>
                                    <Button
                                        type="submit"
                                        colorScheme="teal"
                                        bg="red.700"
                                        _hover={{ bg: "red.500" }}
                                        color="white"
                                        fontSize="lg"
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
                                                color: "red.700",
                                                fontWeight: "medium",
                                                cursor: "pointer",
                                            }}
                                            >
                                                Faça login
                                            </Highlight>
                                        </Link>
                                    </Text>
                                </>
                            ) :(
                                <>
                                    <Flex flexDirection="row" gap={2} >
                                        <Button type="submit" backgroundColor={"red.700"} color={"white"} w={"100px"}>Salvar</Button>
                                        <ChakraLink backgroundColor={"blue.700"} color={"white"} w={"100px"} href="/" alignItems={"center"} justifyContent={"center"}>
                                            Cancelar
                                        </ChakraLink>
                                        <Button  onClick={() => logoutUser('/login')} >Logout</Button>
                                    </Flex>
                                </>
                            )
                        }
                    </Fieldset.Root>
                </Box>
            </Center>
        </Provider>
    );
}
