import styles from "./NavigationBar.module.css";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <div className={styles.barContainer}>
        <div className={styles.column}>
          <Link href="/">
            <button className={styles.pageButton}>
              <span>[</span>Home<span>]</span>
            </button>
          </Link>
          <Link href="/work">
            <button className={styles.activeButton}>
              <span>[</span>Work<span>]</span>
            </button>
          </Link>
        </div>
        <div className={styles.column}>
          <img src="/Handtekening.png" style={{ height: "4rem" }}></img>
        </div>
        <div className={styles.column}>
          <Link href="/work">
            <button className={styles.pageButton}>
              <span>[</span>About me<span>]</span>
            </button>
          </Link>
          <Link href="/work">
            <button className={styles.pageButton}>
              <span>[</span>Contact<span>]</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
