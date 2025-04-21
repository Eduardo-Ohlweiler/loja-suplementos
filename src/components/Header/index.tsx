import { Button, Flex, Group, Heading, Input } from "@chakra-ui/react";
import Link from "next/link";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      px={16}
      py={4}
      bg="white"
      boxShadow="md"
      wrap="wrap"
    >
      <Heading as="h1" size="lg" color="red.600" mr={8}>
        Mika Suplementos
      </Heading>

      <Flex flex="1" justify="center" mx={8}>
        <Group attached w="100%" maxW="600px">
          <Input
            flex="1"
            placeholder="Buscar produto"
            borderColor="red.500"
            _hover={{ borderColor: "red.600" }}
            _focus={{ borderColor: "red.600", boxShadow: "0 0 0 1px #e53e3e" }}
            size="md"
            height="45px"
          />
          <Button
            bg="red.500"
            color="white"
            _hover={{ bg: "red.600" }}
            border="1px solid"
            borderColor="red.600"
            height="45px"
          >
            <PiMagnifyingGlassBold />
          </Button>
        </Group>
      </Flex>

      <Flex align="center" gap={4}>
        <Button
          variant="solid"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        >
          <Link href="/login">
            <IoMdPerson />
          </Link>
        </Button>
        <Button
          variant="solid"
          bg="red.500"
          color="white"
          _hover={{ bg: "red.600" }}
        >
          <Link href="/">
            <FaShoppingCart />
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
