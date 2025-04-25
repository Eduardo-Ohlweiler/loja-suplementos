import { Flex, List } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <Flex as ="footer" padding={"30px"} >
                <Flex flexDirection={"column"}
                      width={"100%"}
                      padding={'30px'}
                >
                    <Flex 
                        color="red.600" 
                        mr={8} 
                        fontSize={{ base: "xl", md: "2xl", lg: "3xl", xl: "4xl" }} 
                        fontWeight="bold"
                        height="100px"
                        
                    >
                        <Link href="/">Mika <br />&nbsp;&nbsp;&nbsp;&nbsp; Suplementos</Link>
                        
                        
                    </Flex>
                    <List.Root color={"black"}>
                            <List.Item>Item 1</List.Item>
                            <List.Item>Item 2</List.Item>
                    </List.Root>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer;