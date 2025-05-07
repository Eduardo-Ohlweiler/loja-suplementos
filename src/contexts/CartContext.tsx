"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/contexts/AuthContext";
import { CartContextInterface, CartItem } from "@/types/cart";

const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { isLoged } = useAuth();
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("@cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
        if (!isLoged) {
        toast.warning("Você precisa estar logado para adicionar itens ao carrinho.");
        router.push("/login");
        return;
        }
    
        const itemWithQuantity = { ...item, quantity: item.quantity || 1 };
    
        const existing = cart.find(i => i.id === itemWithQuantity.id);
    
        if (existing) {
        toast.success("Quantidade do produto atualizada no carrinho.");
    
        setCart(prev => 
            prev.map(i =>
            i.id === itemWithQuantity.id
                ? { ...i, quantity: i.quantity + itemWithQuantity.quantity }
                : i
            )
        );
        } else {
        toast.success("Produto adicionado ao carrinho!");
    
        setCart(prev => [...prev, itemWithQuantity]);
        }
  };

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
