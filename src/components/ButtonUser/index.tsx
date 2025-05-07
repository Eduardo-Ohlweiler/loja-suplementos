"use client"

import { useAuth } from "@/contexts/AuthContext";
import { Button, Menu, Portal } from "@chakra-ui/react"
import { useRouter } from "next/navigation";
import { IoMdPerson } from "react-icons/io";

const ButtonUser = () => {
  const { user, isLoged } = useAuth();
  const { logoutUser } = useAuth();
  const router = useRouter();
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          size="sm"
          variant="solid"
          bg="red.700"
          color="white"
          _hover={{ bg: "red.600" }}
          boxShadow="0px 30px 80px rgba(0, 0, 0, 0.7)"
        >
          <IoMdPerson />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
            <Menu.Content bg="white" color="black" borderRadius="md" boxShadow="lg"  border ={"none"}>
              {!user && !isLoged ?
              (
                <>
                  <Menu.Item
                      value="user"
                      onClick={() => router.push("/register")}
                      _hover={{ bg: "gray.100" }}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      color="black"
                      border="none"
                  >
                      Registre-se
                  </Menu.Item>

                  <Menu.Item
                      value="login"
                      onClick={() => navigateTo("/login")}
                      _hover={{ bg: "gray.100" }}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      color="black"
                      border="none"
                  >
                      Login
                  </Menu.Item>
                  </>
              ) : (
                  <>
                  <Menu.Item
                      value="user"
                      onClick={() => router.push("/register")}
                      _hover={{ bg: "gray.100" }}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      color="black"
                      border="none"
                  >
                      Meu Perfil
                  </Menu.Item>

                  <Menu.Item
                      value="login"
                      onClick={logoutUser}
                      _hover={{ bg: "gray.100" }}
                      _focus={{ boxShadow: "none", outline: "none" }}
                      color="black"
                      border="none"
                  >
                      Logout
                  </Menu.Item>
                  </>
              )
            }
            </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default ButtonUser;
