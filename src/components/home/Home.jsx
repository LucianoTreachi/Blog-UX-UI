import styles from "./Home.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h1 className={styles.title}>
            <span className={styles.titleSpan}>Estrategias UX/UI</span> Para Un
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
          <picture>
            <source
              media="(max-width: 574px)"
              srcSet="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/w_500/v1694527736/blog-ux-ui/home_ucvo66.png"
            />
            <img
              className={styles.image}
              src="https://res.cloudinary.com/dwqk2mkgh/image/upload/f_auto,q_auto/v1694527736/blog-ux-ui/home_ucvo66.png"
              alt="Imagen del Home"
              width={1234}
              height={949}
              fetchpriority="high"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
