import { data } from "../../data/data";
import styles from "./ArticleList.module.css";
import ArticleCard from "../../components/articleCard/ArticleCard";

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
            <ArticleCard article={article} key={article.url} />
          ))}
        </div>
      </div>
    </section>
  );
}
