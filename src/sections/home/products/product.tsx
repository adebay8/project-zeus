import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.scss";
import { ProductProps } from "./types";

const Product: React.FC<ProductProps> = ({ className, ...product }) => {
  return (
    <article className={cx(styles["product"], className)}>
      <figure className="h-10 w-10">
        <Image
          src="https://monoassets.com/f/118499/x/26e5185f10/vector-6.svg"
          alt="Hello"
          className="h-full"
          width={40}
          height={40}
        />
      </figure>
      <h3 className={styles.title}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <Link className={styles["action-button"]} href={product.link}>
        <span>Learn more</span>
        <svg viewBox="0 0 20 20" fill="none" className={styles.arrow}>
          <path
            d="M6 10H14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M10 6L14 10L10 14"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Link>
    </article>
  );
};

export default Product;
