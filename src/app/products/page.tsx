import styles from "./page.module.css";
import ProductSection from "./products";

export const metadata = {
  title: "Products | Ecom Boilerplate",
  description: "Generated by Chase Mack",
};

export default async function ProductsPage() {
  const products = await getProductsData();
  return (
    <main className={styles.main}>
      {products ? <ProductSection products={products} /> : null}
    </main>
  );
}

function getProductsData() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}
