import { useEffect, useRef, useState } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import styles from "./ThemeButton.module.css";

export default function ThemeButton() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });
  const htmlElementRef = useRef(document.querySelector("html"));

  useEffect(() => {
    if (isDarkTheme) {
      htmlElementRef.current.classList.add("dark-theme");
    } else {
      htmlElementRef.current.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      className={styles.themeButton}
      onClick={toggleTheme}
      aria-label="Cambiar el tema"
    >
      {isDarkTheme ? (
        <FiMoon className={styles.moonIcon} />
      ) : (
        <MdOutlineWbSunny className={styles.sunIcon} />
      )}
    </button>
  );
}
