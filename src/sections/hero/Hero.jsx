import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h1 className={styles.title}>
            <span className={styles.titleSpan}>Estrategias UX/UI</span> para un
            Diseño Atractivo y Funcional
          </h1>
          <p className={styles.paragraph}>
            Descubre una gran colección de consejos y técnicas que pueden
            ayudarte a mejorar la experiencia de usuario y el diseño de tu
            interfaz.
          </p>
          <span className={styles.span}>💜 Por Luciano Treachi </span>
        </div>
        <div className={styles.col2}>
          <img
            className={styles.image}
            src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1711818699/blog-ux-ui/home-900x692_lcgghs.png"
            alt=""
            width={900}
            height={692}
          />
        </div>
      </div>
    </section>
  );
}
