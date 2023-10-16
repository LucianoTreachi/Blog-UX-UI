import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import NavigateToTop from "../../routing/NavigateToTop";
import GoBackButton from "../goBackButton/GoBackButton";
import styles from "./ArticleDetail.module.css";

export default function ArticleDetail() {
  const { url } = useParams();
  const articleSelected = data.find((article) => article.url === url);

  return (
    <main>
      <section className={styles.section}>
        <NavigateToTop />
        <div className={styles.container}>
          <GoBackButton />
          <h1 className={styles.title}>{articleSelected.title}</h1>
          <span className={styles.time}>{articleSelected.time}</span>
          <img
            className={styles.cover}
            src={articleSelected.cover}
            alt="Imagen de portada del artículo"
          />
          <div className={styles.description}>
            {articleSelected.description}
          </div>
          <h2 className={styles.redTitle}>
            <ImCross className={styles.crossIcon} /> Evita esto
          </h2>
          <img
            className={styles.image}
            src={articleSelected.image1}
            alt="Imagen ilustrativa 1"
          />
          <h2 className={styles.greenTitle}>
            <FaCheck className={styles.checkIcon} /> Mejor esto
          </h2>
          <img
            className={styles.image}
            src={articleSelected.image2}
            alt="Imagen ilustrativa 2"
          />
        </div>
      </section>
    </main>
  );
}
