import React, { createContext, useContext, useState, useEffect } from "react";

export interface ProductInput {
  id: number;
  name: string;
  price: string;
  image: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductInput, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openCart: () => void;
  closeCart: () => void;
  totalItems: number;
  totalPrice: number;
  formattedTotalPrice: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Helper to extract numeric price from strings like "339.99 €"
export const parsePrice = (priceStr: string): number => {
  if (!priceStr) return 0;
  const cleaned = priceStr.replace(",", ".");
  const match = cleaned.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("finland_tv_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart with localStorage for persistence across reloads
  useEffect(() => {
    try {
      localStorage.setItem("finland_tv_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Could not persist cart:", e);
    }
  }, [cart]);

  // `quantity` is optional and defaults to 1 so every existing call
  // site (addToCart(product)) keeps behaving exactly as before.
  const addToCart = (product: ProductInput, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        // Increment quantity by the requested amount if product already exists
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      }

      // Add as new item with the requested starting quantity
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          numericPrice: parsePrice(product.price),
          image: product.image,
          quantity,
        },
      ];
    });

    // Automatically open the cart sidebar so the user immediately sees the added item
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const clearCart = () => setCart([]);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.numericPrice * item.quantity,
    0
  );
  const formattedTotalPrice = `${totalPrice.toFixed(2)} €`;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        openCart,
        closeCart,
        totalItems,
        totalPrice,
        formattedTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};