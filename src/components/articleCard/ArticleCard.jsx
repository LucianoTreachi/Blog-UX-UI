import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ article }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImage}
        src={article.cover}
        alt="Imagen de portada del artículo"
        width={1000}
        height={600}
        loading="lazy"
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <span className={styles.cardtime}>{article.time}</span>
        <div className={styles.space}></div>
        <Link className={styles.cardButton} to={`/articulo/${article.url}`}>
          Leer el artículo{" "}
          <BsArrowRightShort className={styles.cardArrow} size={30} />
        </Link>
      </div>
    </div>
  );
}
