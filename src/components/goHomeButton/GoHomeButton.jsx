import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./GoHomeButton.module.css";

export default function GoHomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={styles.button}>
      <BsArrowLeft className={styles.icon} /> Volver a inicio
    </button>
  );
}
