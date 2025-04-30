"use client";

import { PasswordInput } from "@/components/ui/password-input";
import { Provider } from "@/components/ui/provider";
import { useAuth } from "@/contexts/AuthContext";
import { loginSchema } from "@/schemas/auth.schemas";
import { LoginUserData } from "@/types/auth";
import {
  Center,
  Field,
  Fieldset,
  Highlight,
  Separator,
  Text,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Login() {

  const { loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onLogin = (data: LoginUserData) => {
    console.log(data);
    loginUser(data);
  };

  return (
    <Provider>
      <Center minH="100vh" bg="gray.100" as="form" onSubmit={handleSubmit(onLogin)}>
        <Box
          bg="white"
          p={{ base: "6", sm: "8", md: "10" }} 
          borderRadius="xl"
          boxShadow="xl"
          w="100%"
          maxW="400px"
        >
          <Fieldset.Root>
            <Box textAlign="center" mb="6">
              <Fieldset.HelperText fontSize={{ base: "sm", md: "md" }} color="gray.500">
                Bem-vindo de volta ao
              </Fieldset.HelperText>
              <Fieldset.Legend
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="red.700"
              >
                Mika Suplementos
              </Fieldset.Legend>
            </Box>
            <Box display="flex" justifyContent="center" mb="4">
                <Image src="/images/logo_redondo.jpeg" alt="Logo da loja" width={150} height={150} />
              </Box>
            <Fieldset.Content>
              <Box mb="4">
                <Field.Root>
                  <Field.Label color="gray.700">Email:</Field.Label>
                  <Input {...register("email")} placeholder="Informe seu e-mail..." color="gray.600" />
                  <Text color="red.500" fontSize="14px">{errors.email?.message}</Text>
                </Field.Root>
              </Box>

              <Box mb="6">
                <Field.Root>
                  <Field.Label color="gray.700">Senha:</Field.Label>
                  <PasswordInput {...register("password")} placeholder="Informe sua senha..." color="gray.600" />
                  <Text color="red.500" fontSize="14px">{errors.password?.message}</Text>
                </Field.Root>
              </Box>

              <Button
                type="submit"
                colorScheme="red"
                bg="red.700"
                _hover={{ bg: "red.500" }}
                w="full"
                h="12"
                color="white"
                fontSize="lg"
              >
                Entrar
              </Button>

            </Fieldset.Content>
          </Fieldset.Root>

          <Separator my="6" />

          <Text color="gray.600" fontSize={{ base: "sm", sm: "md" }} textAlign="center">
            Não tem uma conta?{" "}
            <Link href="/register" >
              <Highlight
                query="Registre-se"
                styles={{
                  color: "red.700",
                  fontWeight: "medium",
                  cursor: "pointer",
                }}
              >
                Registre-se
              </Highlight>
            </Link>
          </Text>
        </Box>
      </Center>
    </Provider>
  );
}
