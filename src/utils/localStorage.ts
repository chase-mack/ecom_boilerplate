import { CartItem } from "@/context/cart.context";

export const getCartItemsFromLocalStorage = (): CartItem[] => {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    return JSON.parse(storedCartItems);
  }
  return [];
};
