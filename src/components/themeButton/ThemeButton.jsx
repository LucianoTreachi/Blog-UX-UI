import { useEffect, useRef, useState } from "react";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
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
        <IoMdMoon className={styles.moonIcon} />
      ) : (
        <IoMdSunny className={styles.sunIcon} />
      )}
    </button>
  );
}
