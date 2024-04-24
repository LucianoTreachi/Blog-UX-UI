import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home/Home";
import ArticleDetail from "../pages/articleDetail/ArticleDetail";
import About from "../pages/about/About";
import Error404 from "../pages/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-este-blog" element={<About />} />
        <Route path="/articulo/:url" element={<ArticleDetail />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
