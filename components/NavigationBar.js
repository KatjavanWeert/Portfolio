import styles from "./NavigationBar.module.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <>
      <div className={styles.barContainer}>
        <div className={styles.column}>
          <Link href="/">
            <button
              className={
                router.pathname == "/" ? styles.activeButton : styles.pageButton
              }
            >
              <span>[</span>Home<span>]</span>
            </button>
          </Link>
          <Link href="/work">
            <button
              className={
                router.pathname == "/work"
                  ? styles.activeButton
                  : styles.pageButton
              }
            >
              <span>[</span>Work<span>]</span>
            </button>
          </Link>

          <Link href="/aboutme">
            <button
              className={
                router.pathname == "/aboutme"
                  ? styles.activeButton
                  : styles.pageButton
              }
            >
              <span>[</span>About me<span>]</span>
            </button>
          </Link>
          <Link href="/contact">
            <button
              className={
                router.pathname == "/contact"
                  ? styles.activeButton
                  : styles.pageButton
              }
            >
              <span>[</span>Contact<span>]</span>
            </button>
          </Link>
        </div>
        <div className={styles.column}>
          <img src="/Handtekening.png" style={{ height: "4rem" }}></img>
        </div>
      </div>
    </>
  );
}
