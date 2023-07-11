"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface Rating {
  rate: number;
  count: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  isInCart: (itemId: number) => boolean;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  isInCart: () => false,
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const isInCart = (itemId: number) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
