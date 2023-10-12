import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "../components/main/Main";
import About from "../components/about/About";
import ArticleDetail from "../components/articleDetail/ArticleDetail";
import Error404 from "../components/error404/Error404";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/sobre-este-blog" element={<About />} />
        <Route path="/articulo/:url" element={<ArticleDetail />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
