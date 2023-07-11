import { IProduct } from "../products";
import ProductPage from "./productPage";

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return products.map((product: { id: number }) => ({
    id: product.id.toString(),
  }));
}

export default async function Page({ params }: { params: IProduct }) {
  const product = await getProductData(params.id);
  return <main>{product ? <ProductPage product={product} /> : null}</main>;
}

function getProductData(id: number) {
  const productId = id.toString();
  return fetch(`https://fakestoreapi.com/products/${productId}`).then((res) =>
    res.json()
  );
}
