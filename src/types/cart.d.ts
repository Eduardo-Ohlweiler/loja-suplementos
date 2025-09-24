import { Produto } from "./produto/produto";

export interface CartItem extends Produto {
  quantidade: number;
}

export interface CartContextInterface {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  proceedToCheckout: () => void;
}

/*export interface CartCardsProps {
  categorias: Classificacao[];
  objetivos:  Objetivo[];
}*/