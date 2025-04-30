"use client";

import { Box, Flex, Text, Link as ChakraLink, Icon, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="white" 
         color="black" 
         py={3} 
         px={{ base: 4, md: 8, lg: '10rem' }} 
         paddingBottom={'20px'} 
         boxShadow={"0px 20px 50px rgba(0, 0, 0, 0.3)"} 
    >
      <Flex
        direction={{ base: "column", sm: "row", md: "row" }}
        justify="space-between"
        align={"center"}
      >
        <Flex direction="column" align="flex-start" gap={4}>
          <ChakraLink as={Link} href="/" display="flex" alignItems="center">
            <Image src="/images/logo_redondo.jpeg" alt="Logo da loja" width={200} height={200} />
          </ChakraLink>
          <HStack gap={4} direction={"column"}>
            <ChakraLink as="a" href="https://www.instagram.com/mika.suplementos/" target="_blank" rel="noopener noreferrer" color={"black"}>
                <Icon as={FaInstagram} color="black" boxSize={5} _hover={{ color: "red.500" }} />Instagram 
            </ChakraLink>
            <ChakraLink color={"black"} as="a" href="https://www.facebook.com/mikamusculacao" target="_blank" rel="noopener noreferrer">
                <Icon as={FaFacebook} color="black" boxSize={5} _hover={{ color: "red.500" }} />Facebook
            </ChakraLink>
          </HStack>
          <HStack gap={2}>
            <Icon as={FaPhoneAlt} />
            <Text>(51) 99264-1980</Text>
          </HStack>
        </Flex>

        <Flex direction="column" align="flex-start" gap={2}>
          <Text fontWeight="bold" mb={2}>Endereço</Text>
          <Text> R. Cel. Agra, 1099 - Sala 01</Text>
          <Text>Bairro Centro, Venâncio Aires - RS</Text>
          <Text>CEP: 95800-000</Text>
          
        </Flex>

        <Flex direction="column" align="flex-start" gap={2}>
          <Text fontWeight="bold"  mb={2}>Links úteis</Text>
          <ChakraLink color={"black"} as={Link} href="/sobre" _hover={{ color: "red.500" }}>
            Quem somos
          </ChakraLink>
          <ChakraLink color={"black"} as={Link} href="/trocas" _hover={{ color: "red.500" }}>
            Trocas e devoluções
          </ChakraLink>
          <ChakraLink color={"black"} as={Link} href="/privacidade" _hover={{ color: "red.500" }}>
            Política de privacidade
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
