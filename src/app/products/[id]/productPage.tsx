"use client";
/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import { CartContext } from "@/context/cart.context";
import styles from "./productPage.module.css";

export default function ProductPage(props: any) {
  const [product, setProduct] = useState(props.product);
  const { addToCart, isInCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  return (
    <section className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.image} alt="Product Image" />
      </div>
      <div className={styles.productInfo}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{`${product.rating.rate} (${product.rating.count})`}</p>
        <button
          className={styles.addToCart}
          onClick={() => addToCart(props.product)}
        >
          {isInCart(props.product.id) ? "Added To Cart" : "Add To Cart"}
        </button>
      </div>
    </section>
  );
}
