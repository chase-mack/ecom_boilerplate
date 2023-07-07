"use client";
import { useState, useEffect } from "react";

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default function Products(props: any) {
  const [products, setProducts] = useState(props.products);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);
  return (
    <section>
      <ul>
        {products.map((product: Product) => {
          return <li key={product.id}>Product: {product.title}</li>;
        })}
      </ul>
    </section>
  );
}
