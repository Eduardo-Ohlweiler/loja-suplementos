"use client";

import { getProdutos } from "@/services/produto.service";
import { Produto } from "@/types/produto/produto";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import ProdutoCard from "../ProdutoCard";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // CSS padrão do carrossel

const Banner = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const res = await getProdutos();
      setProdutos(res);
    };
    fetchProdutos();
  }, []);

  const getSlidePercentage = () => {
    if(typeof window === 'undefined') return
    const width = window.innerWidth;
    if (width <= 480) return 100;
    if (width <= 768) return 50;
    return 33.33;
  };

  const [slidePercentage, setSlidePercentage] = useState(getSlidePercentage());
  
  useEffect(() => {
    const handleResize = () => {
      
      setSlidePercentage(getSlidePercentage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      w={"100%"} 
      maxW="1200px"
      mx="auto"
      mt={4}
      px={{ base: 2, sm: 4 }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        showArrows
        swipeable
        emulateTouch
        centerMode
        centerSlidePercentage={slidePercentage}
        dynamicHeight={false}
      >
        {produtos.map((produto) => (
          <Box key={produto.id} p={{ base: 1, sm: 2 }} w="100%">
            <ProdutoCard produto={produto} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Banner;