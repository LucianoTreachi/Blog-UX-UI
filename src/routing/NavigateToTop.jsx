import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavigateToTop() {
  // Navegar siempre arriba
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
}
