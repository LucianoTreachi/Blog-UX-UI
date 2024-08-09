import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ article }) {
  return (
    <Link to={`/articulo/${article.url}`}>
      <div className={styles.card}>
        <img
          className={styles.cardImage}
          src={article.cover}
          alt=""
          width={1000}
          height={600}
          loading="lazy"
        />
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{article.title}</h3>
          <div className={styles.space}></div>
          <span className={styles.cardtime}>{article.time}</span>
        </div>
      </div>
    </Link>
  );
}
