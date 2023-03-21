import Link from "next/link";
import styles from "./hero.module.scss";
import WavyLine from "./components/wavy-line";
import Showcase from "./components/showcase";

const HomeHero = () => {
  return (
    <section className={styles.hero} id="hero">
      <h1 className={styles.heading}>
        Building ideas that might
        <br className={styles.linebreaker} />
        <span className={styles["highlighted-text"]}>
          &nbsp;
          <WavyLine />
          <span className={styles.text}>revolutionize</span>
          &nbsp;
        </span>
        <br className={styles.linebreaker} />
        the world.
      </h1>
      <h2 className={styles.subheading}>
        Take a picture of your room and see how your room looks in different
        themes. 100% free &#8211; remodel your room today.
      </h2>
      <div className={styles.actions}>
        <Link href="/#" className={styles.link} target="_blank">
          Join waitlist
        </Link>
      </div>
      <Showcase />
    </section>
  );
};

export default HomeHero;
