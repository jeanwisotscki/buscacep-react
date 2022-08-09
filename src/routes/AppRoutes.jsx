import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SearchCep } from "../pages/SearchCep";

export const AppRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca/:cep" element={<SearchCep />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
