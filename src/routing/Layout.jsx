import Header from "../sections/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../sections/footer/Footer";

/* Estructura del sitio */
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
