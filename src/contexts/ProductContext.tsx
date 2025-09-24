"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Produto } from "../types/produto/produto";


type ProductContextType = {
  products: Produto[];

  filteredProducts: Produto[];
  setProducts: (products: Produto[]) => void;
  setFilteredProducts: (products: Produto[]) => void;
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products,         setProducts]         = useState<Produto[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Produto[]>([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);
    
    return (
    <ProductContext.Provider value={{ products, filteredProducts, setProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};
