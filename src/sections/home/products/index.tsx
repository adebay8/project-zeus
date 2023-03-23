import cx from "classnames";
import Product from "./product";
import styles from "./products.module.scss";
import { Product as ProductType } from "./types";

const Products = () => {
  const products = [
    {
      name: "Alloy",
      description:
        "Manage all your bank accounts in one place, and get insights️ on your spending",
      link: "/#products",
    },
    {
      name: "Wisharoo",
      description: "Turn your dreams into reality, one wish at a time.",
      link: "/#products",
    },
    {
      name: "Moovium",
      description:
        "Manage all your delivery operations from one platform to enhance efficiency and deliver exceptional customer experience at scale.",
      link: "https://moovium.ponnle.xyz",
    },
    {
      name: "WanderWorld",
      description:
        "Your passport to a world of adventure and connection. Explore the world, connect with fellow travelers – all on one platform.",
      link: "/#products",
    },
  ];

  const renderProducts = () => {
    const splitProducts: ProductType[][] = [];

    for (let i = 0; i < Math.ceil(products.length / 3); i++) {
      splitProducts.push(products.slice(i * 3, i * 3 + 3));
    }

    return splitProducts.map(([first, second, third], index) => (
      <div key={index} className={styles["products-grid"]}>
        <Product className={cx(styles.first)} {...first} />
        {second && (
          <Product className={cx(styles.half, styles.second)} {...second} />
        )}
        {third && (
          <Product className={cx(styles.half, styles.third)} {...third} />
        )}
      </div>
    ));
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
};

export default Products;
