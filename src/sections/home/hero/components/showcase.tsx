import cx from "classnames";
import styles from "./showcase.module.scss";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        const middleIndex = 2;
        const remainder = index % middleIndex;

        if (index == middleIndex) {
          return (
            <div
              key={item}
              className={cx(styles["image-container"], styles.full)}
            ></div>
          );
        }

        if (remainder == 1) {
          return (
            <div
              key={item}
              className={cx(styles["image-container"], styles.third)}
            ></div>
          );
        }

        if (remainder == 0) {
          return (
            <div
              key={item}
              className={cx(styles["image-container"], styles.half)}
            ></div>
          );
        }
      })}
    </div>
  );
};

export default Showcase;
