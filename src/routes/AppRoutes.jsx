import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { SearchCep } from "../pages/SearchCep";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busca/:cep" element={<SearchCep />} />
      </Routes>
    </BrowserRouter>
  );
};
