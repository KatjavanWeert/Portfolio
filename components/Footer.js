import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/fish.svg" alt="Fish" className={styles.logo} /> for
        you
      </footer>
    </>
  );
}
