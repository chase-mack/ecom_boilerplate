/* eslint-disable react/no-unescaped-entities */
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
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState(props.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);

  console.log(category);

  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);

  const selectedProducts =
    category === "all"
      ? products
      : products.filter((product: IProduct) => {
          return product.category === category;
        });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = selectedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(selectedProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleProductsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(event.currentTarget.value, 10);
    setProductsPerPage(selectedValue);
    setCurrentPage(1);
  };

  return (
    <>
      <div className={styles.productNav}>
        <select
          name="category"
          id="category"
          onChange={(event) => setCategory(event.currentTarget.value)}
        >
          <option defaultValue={"all"} disabled>
            Category
          </option>
          <option value="all">All Items</option>
          <option value="electronics">Electronics</option>
          <option value="jewelry">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        {/* Products per page */}
        <select
          name="productsPerPage"
          id="productsPerPage"
          value={productsPerPage}
          onChange={handleProductsPerPageChange}
        >
          <option value={3}>3 Products per Page</option>
          <option value={6}>6 Products per Page</option>
          <option value={9}>9 Products per Page</option>
        </select>
      </div>
      <section className={styles.productSection}>
        {currentProducts.map((product: IProduct) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
      {/* Pagination */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={
                currentPage === pageNumber ? styles.active : styles.inactive
              }
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
}
