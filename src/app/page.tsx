import Image from "next/image";
import styles from "./layout.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>
        Welcome to the site! We have much cool stuffs. Goodbye.
      </h1>
    </main>
  );
}
