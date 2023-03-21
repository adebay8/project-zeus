import cx from "classnames";
import styles from "./products.module.scss";

export default function Products() {
  const renderProducts = () => {
    const products = [1, 2, 3, 4];
    const splitProducts: number[][] = [];

    for (let i = 0; i < Math.ceil(products.length / 3); i++) {
      splitProducts.push(products.slice(i * 3, i * 3 + 3));
    }

    return splitProducts.map((product, index) => {
      return (
        <div key={index} className={styles["products-grid"]}>
          <article className={cx(styles["product"], styles.first)}></article>
          {product[1] && (
            <article
              className={cx(styles["product"], styles.half, styles.second)}
            ></article>
          )}
          {product[2] && (
            <article
              className={cx(styles["product"], styles.half, styles.third)}
            ></article>
          )}
        </div>
      );
    });
  };
  return (
    <section id="products" className={styles.products}>
      <div className={styles.description}>
        <h2 className={styles.heading}>
          Build for the future of digital finance.
        </h2>
        <p className={styles.subheading}>
          Bring tomorrow&#39;s solutions to life, with our customer-focused
          solutions, today.
        </p>
      </div>
      {renderProducts()}
    </section>
  );
}
