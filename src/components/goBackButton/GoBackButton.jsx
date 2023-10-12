import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      <BsArrowLeft className={styles.icon} /> Volver atrás
    </button>
  );
}
