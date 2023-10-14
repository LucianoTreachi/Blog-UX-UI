import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import styles from "./ArticleList.module.css";

export default function ArticleList() {
  const articlesQuantity = data.length;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Artículos</h2>
        <span className={styles.articlesQuantity}>
          Artículos publicados: {articlesQuantity}
        </span>
        <div className={styles.articlesContainer}>
          {data.map((article) => (
            <div className={styles.card} key={article.url}>
              <img className={styles.cardImage} src={article.cover} alt="" />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{article.title}</h3>
                <span className={styles.cardtime}>{article.time}</span>
                <div className={styles.space}></div>
                <Link
                  className={styles.cardButton}
                  to={`/articulo/${article.url}`}
                >
                  Leer el artículo{" "}
                  <BsArrowRightShort className={styles.cardArrow} size={30} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
