import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles["nav-left"]}>
          <Link className={styles["logo-link"]} href="/">
            <Image
              src="https://monoassets.com/f/118499/x/8594c87134/footer-logo.svg"
              alt="Mono Logo"
              width={133.33}
              height={20}
            />
          </Link>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <button>
                <span>Products</span>
                <div className={styles.dropdown}>
                  <div className={styles["dropdown-icon"]}></div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className={styles["action-button"]}>
          <Link className={styles["action-link"]} href="/login">
            Find out more
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
