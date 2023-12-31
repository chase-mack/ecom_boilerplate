"use client";
import { CartItem } from "@/context/cart.context";
import { useState, useEffect } from "react";
import { getCartItemsFromSessionStorage } from "@/utils/sessionStorage";
import styles from "./page.module.css";

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedItems = getCartItemsFromSessionStorage();
    setItems(storedItems);
  }, []);

  const handleDelete = (item: CartItem) => {
    setItems((prevItems) => {
      const index = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <section className={styles.cartSection}>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <p className={styles.itemTitle}>{item.title}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
          </div>
        ))
      ) : (
        <h3>Nothing to see here.</h3>
      )}
    </section>
  );
}
