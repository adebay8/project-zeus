import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles.cta}>
          <h2 className={styles.title}>Start building on BlueNova</h2>
          <p className={styles.description}>
            Unlock your potential by connecting with a diverse community of
            great minds around the world.
          </p>
          <div className={styles["cta-button"]}>
            <Link className={styles["cta-link"]} href="/signup">
              Find out more
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M6 10H14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M10 6L14 10L10 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.socials}>
          <div className={styles.brand}>
            <figure className={styles.logo}>
              <Image
                src="https://res.cloudinary.com/adebay8/image/upload/v1681319066/bluenova-logo-preview_bwwnfa.png"
                alt="blue nova logo"
                width={97.55}
                height={15}
              />
            </figure>
            <span className={styles.text}>© BlueNova Limited</span>
          </div>
          <div className={styles.platforms}>
            <a
              target="_blank"
              href="https://twitter.com"
              rel="noreferrer"
              className={styles.link}
            >
              <Image
                src="https://monoassets.com/f/118499/x/afba8741a5/vector-1.svg"
                alt=""
                className="h-3.5 mr-1.25"
                width={16}
                height={14}
              />
              Twitter
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com"
              rel="noreferrer"
              className={styles.link}
            >
              <Image
                src="https://monoassets.com/f/118499/x/947f47efb7/vector-2.svg"
                alt=""
                width={16}
                height={14}
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
