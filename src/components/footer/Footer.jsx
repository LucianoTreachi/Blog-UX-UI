import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Estrategias UX UI para un diseño atractivo | Por Luciano Treachi
        </p>
      </div>
    </footer>
  );
}
