/* eslint-disable @next/next/no-img-element */
import { IProduct } from "./products";
import styles from "./product.module.css";

export default function Product(props: IProduct) {
  return (
    <div className={styles.productCard}>
      <a href={`/products/${props.id}`}>
        <div className={styles.productImage}>
          <img src={props.image} alt="" />
        </div>
        <div>
          <h3 className={styles.productTitle}>{props.title}</h3>
          <p className={styles.productPrice}>{`$${props.price}/ea`}</p>
        </div>
      </a>
    </div>
  );
}
