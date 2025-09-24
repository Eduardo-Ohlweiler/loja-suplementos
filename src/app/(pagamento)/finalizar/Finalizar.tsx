"use client";

import {
  Button,
  Field,
  Fieldset,
  Input,
  NativeSelect,
  Stack,
  Flex,
  Box,  
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { FormaPagamento } from "@/types/forma_pagamento";
import { getFormasPagamento } from "@/services/forma_pagamento";
import { useCart } from "@/contexts/CartContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Finalizar = () => {
  const { cart } = useCart();
  const searchParams = useSearchParams();
  const [formasDisponiveis, setFormasDisponiveis] = useState<FormaPagamento[]>([]);
  const [formaSelecionada, setFormaSelecionada] = useState<FormaPagamento | null>(null);
  const [parcelasSelecionadas, setParcelasSelecionadas] = useState(1);

  const valorTotal =
    parseFloat(searchParams.get("total") || "0") ||
    cart.reduce((sum, item) => sum + item.valor * item.quantidade, 0);
  const valorParcela = parcelasSelecionadas ? (valorTotal / parcelasSelecionadas).toFixed(2) : "0.00";

  useEffect(() => {
    const fetchFormas = async () => {
      try {
        const data = await getFormasPagamento();
        setFormasDisponiveis(data);
        if (data.length > 0) {
          setFormaSelecionada(data[0]);
          setParcelasSelecionadas(1);
        }
      } catch (error) {
        console.error("Erro ao carregar formas de pagamento:", error);
      }
    };

    fetchFormas();
  }, []);

  const handleChangeForma = (id: number) => {
    const forma = formasDisponiveis.find((f) => f.id === id) || null;
    setFormaSelecionada(forma);
    setParcelasSelecionadas(1);
  };

  const handleChangeParcelas = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParcelasSelecionadas(Number(e.target.value));
  };

  const parcelasOptions = formaSelecionada
    ? Array.from({ length: formaSelecionada.quantidade_parcelas }, (_, i) => i + 1)
    : [1];

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.100" px={4} textAlign={"center"}>
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
                <Stack gap={4}>
                <Field.Root>
                    <Field.Label>Forma de pagamento:</Field.Label>
                    <NativeSelect.Root w="200px" color="black">
                    <NativeSelect.Field
                        name="forma_pagamento"
                        backgroundColor="white"
                        onChange={(e) => handleChangeForma(Number(e.target.value))}
                        value={formaSelecionada?.id || ""}
                    >
                        {formasDisponiveis.map((forma) => (
                        <option key={forma.id} value={forma.id} style={{ color: "black", backgroundColor: "white" }}>
                            {forma.forma_pagamento_nome}
                        </option>
                        ))}
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
                        onChange={handleChangeParcelas}
                        value={parcelasSelecionadas}
                    >
                        {parcelasOptions.map((parcela) => (
                        <option key={parcela} value={parcela} style={{ color: "black", backgroundColor: "white" }}>
                            {parcela}x de R$ {(valorTotal / parcela).toFixed(2).replace(".", ",")}
                        </option>
                        ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                    </NativeSelect.Root>
                </Field.Root>

                <Flex direction={"column"} gap={4}>
                    <Field.Root flex="1">
                    <Field.Label>Valor da parcela:</Field.Label>
                    <Input
                        name="valor_parcela"
                        backgroundColor="#d2d2d2"
                        w={"150px"}
                        readOnly
                        value={`R$ ${valorParcela.replace(".", ",")}`}
                    />
                    </Field.Root>

                    <Field.Root flex="1">
                    <Field.Label>Valor total:</Field.Label>
                    <Input
                        name="valor_total"
                        backgroundColor="#d2d2d2"
                        w={"150px"}
                        readOnly
                        value={`R$ ${valorTotal.toFixed(2).replace(".", ",")}`}
                    />
                    </Field.Root>
                </Flex>

                <Box>
                    <Field.Root>
                    <Field.Label>Produtos selecionados:</Field.Label>
                    {cart.length > 0 ? (
                        cart.map((item, index) => (
                        <Text key={index}>
                            {item.produtoNome} - {item.quantidade}x R$ {item.valor.toFixed(2).replace(".", ",")}
                        </Text>
                        ))
                    ) : (
                        <Text>Nenhum produto no carrinho.</Text>
                    )}
                    </Field.Root>
                </Box>
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
            <Link
                href="/"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40px",
                    borderRadius: "md",
                    width: "100%",
                    color: "Black",
                    fontSize: "md",
                    fontWeight: "bold",
                    textDecoration: "none",
                }}

            >
                Voltar
            </Link>
        </Stack>
      </Fieldset.Root>
    </Flex>
  );
};

export default Finalizar;