import { Classificacao } from "@/types/produto/classificacao";
import { Objetivo } from "@/types/produto/objetivo";
import { Produto } from "@/types/produto/produto";
import { useCart } from "@/contexts/CartContext";

import {
  CardBody,
  Image,
  Text,
  Button,
  VStack,
  Card,
} from "@chakra-ui/react";
import ProductWindow from "../ProductWindow";

interface ProdutoProps {
    produto: Produto;
    categorias?: Classificacao[];
    objetivos?: Objetivo[];
}

const ProdutoCard: React.FC<ProdutoProps> = ({ produto }) => {
    const { addToCart } = useCart();
    //const [categorias, setCategorias] = useState<Classificacao[]>([]);
    //const [objetivos, setObjetivos] = useState<Objetivo[]>([]);

    //const categoria = categorias.find(cat => cat.id === produto.categoria_id);
    //const objetivo = objetivos.find(obj => obj.id === produto.objetivo_id);

    /*const fetchCategorias = async() => {
            const categorias = await getCategorias();
            setCategorias(categorias);
        }
    
        const fetchObjetivos = async() => {
            const objetivos = await getObjetivos();
            setObjetivos(objetivos);
        }
    
        useEffect(() => {
            fetchCategorias();
            fetchObjetivos();
        }, []);*/

    const handleAddToCart = () => {
        const item = {
          ...produto,
          quantidade: 1,
        };
        addToCart(item);
      };

    return (
        <Card.Root
        bg="white"
        borderRadius="xl"
        boxShadow="md"
        overflow="hidden"
        transition="0.2s"
        _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
        w={"100%"}
        maxW="300px"
        mx="auto"
        >
        <Image
            src={produto.foto}
            alt={produto.produtoNome}
            objectFit="contain"
            w="100%"
            h="200px"
        />

        <CardBody>
            <VStack align="start">
            <Text fontWeight="bold" fontSize="lg" color="gray.800" h={"50px"}>
                {produto.produtoNome}
            </Text>

            <Text color="red.700" fontSize="lg" fontWeight="semibold">
                R$ {produto.valor.toFixed(2).replace(".", ",")}
            </Text>
       
            <Text fontSize="sm" color="gray.700" fontWeight="medium">
                Categoria: {produto.categoria.categoriaNome}
            </Text>

            <Text fontSize="xs" color="gray.500">
                Objetivo: {produto.objetivo.objetivoNome}
            </Text>

            <ProductWindow  produto={produto}
            />

            <Button backgroundColor={"red.700"} 
                    color={"white"} w="full" 
                    mt={2} border={"red"} 
                    _hover={{ bg: "red.600", transform: "scale(1.02)", transition: "0.5s" }} 
                    overflow="hidden" 
                    transition="0.8s" 
                    onClick={handleAddToCart}
            >
                Adicionar ao carrinho
            </Button>
            </VStack>
        </CardBody>
        </Card.Root>
    );
};

export default ProdutoCard;
