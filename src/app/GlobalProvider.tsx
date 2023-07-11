"use client";

import { CartProvider } from "@/context/cart.context";

export function GlobalProvider({ children }: any) {
  return <CartProvider>{children}</CartProvider>;
}
