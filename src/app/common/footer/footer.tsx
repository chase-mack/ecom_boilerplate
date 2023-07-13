import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.flex}>
          <div className={`${styles.flexThird} ${styles.borderOn}`}>
            <div>
              <Link className={styles.logoContainer} href="/">
                <svg
                  id="logo"
                  width="100%"
                  viewBox="0 0 247 48"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30.3109 0L24.3109 36.5L60.6218 47.25H0L30.3109 0Z" />
                  <path d="M154.311 0L148.311 36.5H166.5L154.311 30.1098L184.622 23.7196V47.25H124L154.311 0Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M122.622 47.25L92.3109 0L62 47.25H122.622ZM109.631 40L92.3109 13L74.9904 40L92.3109 43L109.631 40Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M246.622 47.25L216.311 0L186 47.25H246.622ZM233.631 40L216.311 13L198.99 40L216.311 43L233.631 40Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className={styles.flexThird}>
            <ul className={styles.footerList}>
              <li>
                <a
                  className={styles.footerLink}
                  href="https://www.fireflyint.com/"
                >
                  Home
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="/products">
                  Products
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="/cart">
                  Cart
                </a>
              </li>
              <li>
                <a className={styles.footerLink} href="/login">
                  Login
                </a>
              </li>
            </ul>
            <div className={styles.legal}>
              <p>
                Company Name &copy; {year}
                <br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
