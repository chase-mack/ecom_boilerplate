import { CartItem } from "@/context/cart.context";

export const getCartItemsFromSessionStorage = (): CartItem[] => {
  const storedCartItems = sessionStorage.getItem("cartItems");
  if (storedCartItems) {
    return JSON.parse(storedCartItems);
  }
  return [];
};
