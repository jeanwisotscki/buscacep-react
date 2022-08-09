import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SearchCep } from "../pages/SearchCep";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="buscacep-react/" element={<Home />} />
        <Route path="buscacep-react/busca/:cep" element={<SearchCep />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
