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
    if (!isLoged) {
      setCart([]);
      localStorage.removeItem("@cart");
    }
  }, [isLoged]);

  useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
        if (!isLoged) {
        toast.warning("Você precisa estar logado para adicionar itens ao carrinho.");
        router.push("/login");
        return;
        }
    
        const itemWithQuantity = { ...item, quantidade: item.quantidade || 1 };
    
        const existing = cart.find(i => i.id === itemWithQuantity.id);
    
        if (existing) {
        toast.success("Quantidade do produto atualizada no carrinho.");
    
        setCart(prev => 
            prev.map(i =>
            i.id === itemWithQuantity.id
                ? { ...i, quantidade: i.quantidade + itemWithQuantity.quantidade }
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

  const incrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  };
  
  const decrementQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1 }
            : item
        )
    );
  };

  const proceedToCheckout = () => {
    if (!isLoged) {
      toast.warning("Você precisa estar logado para finalizar a compra.");
      router.push("/login");
      return;
    }

    const total = cart.reduce(
      (sum, item) => sum + item.valor * item.quantidade,
      0
    );

    if (total <= 0 || cart.length === 0) {
      toast.warning("Seu carrinho está vazio ou não tem itens válidos.");
      return;
    }

    const query = new URLSearchParams({
      total: total.toFixed(2),
      cart: JSON.stringify(cart),
    }).toString();

    toast.success("Prosseguindo para finalização da compra!");
    router.push(`/finalizar?${query}`);
  };
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity, proceedToCheckout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
