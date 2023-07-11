"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Product from "./product";

interface Rating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default function ProductSection(props: any) {
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);
  return (
    <section className={styles.productSection}>
      {products.map((product: IProduct) => {
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
}
