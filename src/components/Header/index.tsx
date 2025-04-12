import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
    return (
        <Flex as = "header" align = "center" justify = "center">
            <Flex as ="ul">
                <li>
                    <Link href = "/">Comprar</Link>
                </li>
                <li>
                    <Link href = "/">Alugar</Link>
                </li>
                <li>
                    <Link href = "/">Vender</Link>
                    
                </li>
            </Flex>
            
            <Heading as = "h1">PierretHome360</Heading>
        </Flex>
    );
};

export default Header;