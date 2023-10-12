import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          {/* Logo */}
          <Link className={styles.logo} to="/">
            Blog.
          </Link>
          {/* Navigation */}
          <div className={`${styles.menu} ${isOpen && styles.open}`}>
            <AiOutlineClose
              className={styles.closeMenuIcon}
              onClick={toggleMenu}
            />
            <Link
              className={styles.menuLink}
              to="/sobre-este-blog"
              onClick={toggleMenu}
            >
              Sobre este blog
            </Link>
            {/* <Link
              className={styles.menuLink}
              to="/contacto"
              onClick={toggleMenu}
            >
              Contacto
            </Link> */}
          </div>
          {/* Hamburguer Menu */}
          <AiOutlineMenu className={styles.openMenuIcon} onClick={toggleMenu} />
        </nav>
      </header>
    </>
  );
}
