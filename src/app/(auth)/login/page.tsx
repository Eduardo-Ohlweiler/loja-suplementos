"use client";

import { Provider } from "@/components/ui/provider";
import {
  Center,
  Field,
  Fieldset,
  Highlight,
  Input,
  Separator,
  Text,
  Box,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Login() {
  return (
    <Provider>
      <Center minH="100vh" bg="gray.100">
        <Box
          bg="white"
          p={{ base: "6", sm: "8", md: "10" }} // Espaçamento ajustado para diferentes tamanhos de tela
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
                color="teal.600"
              >
                PierretHome360
              </Fieldset.Legend>
            </Box>

            <Fieldset.Content>
              <Box mb="4">
                <Field.Root>
                  <Field.Label color="gray.700">Email:</Field.Label>
                  <Input placeholder="Informe seu e-mail..." />
                </Field.Root>
              </Box>

              <Box mb="6">
                <Field.Root>
                  <Field.Label color="gray.700">Senha:</Field.Label>
                  <Input placeholder="Informe sua senha..." type="password" />
                </Field.Root>
              </Box>

              <Button colorScheme="teal" bg="teal.600" _hover={{ bg: "teal.500" }} w="full" h="12">
                Entrar
              </Button>
            </Fieldset.Content>
          </Fieldset.Root>

          <Separator my="6" />

          <Text color="gray.700" fontSize={{ base: "sm", sm: "md" }} textAlign="center">
            Não tem uma conta?{" "}
            <Link href="/register" >
              <Highlight
                query="Registre-se"
                styles={{
                  color: "#00b3b9",
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
